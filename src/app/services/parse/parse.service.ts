import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway/gateway.service';
import { FormatService } from '../format/format.service';
import { Papa } from 'ngx-papaparse';
import { JSONstats } from 'src/app/models/JSONstats.model';
import { StateService } from '../state/state.service';


@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor(private gatewayService: GatewayService, private papa: Papa, private formatter: FormatService, private state: StateService) { }

  parse(file) {
    if (file.type != "text/csv") {
      this.state.fail("Your netflix history should be a .csv file")
      return;
    }
    
    this.papa.parse(
      file,
      {
        error: function (err, file) {
          this.state.fail("Unexpected format of file");
        },
        complete: result => {
          this.parseFile(result['data']);
        }
      }
    );
  }

  parseFile(content: string[][]) {
    content.shift();
    content.pop();
    this.state.numberOfTitles = content.length;
    this.state.load();

    this.gatewayService.post(content).subscribe(
      (data: JSONstats) => {
        data = this.formatter.format(data);
        this.gatewayService.stats.next(data);
        this.state.stopLoad();
        this.state.upload();
      },
      error => {
        this.state.stopLoad();
        this.state.removeUpload();
        this.state.fail(error.error.message);
      }
    );
  }
}
