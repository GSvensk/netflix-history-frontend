import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway/gateway.service';
import { FormatService } from '../format/format.service';
import { Papa } from 'ngx-papaparse';
import { JSONstats } from 'src/app/models/JSONstats.model';
import { StateService } from '../state/state.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor(private gatewayService: GatewayService, private papa: Papa, private formatter: FormatService, private state: StateService) { }

  parse($event) {
    console.log(event);
    this.papa.parse(
      $event.target.files[0],
      {
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
    const json: Map<string, string> = new Map<string, string>();

    content.forEach(item => {
      json[item[0]] = item[1];
    });

    this.gatewayService.getResults(json).subscribe(
      (data: JSONstats) => {
        data = this.formatter.format(data);
        this.gatewayService.stats = of(data);
        this.state.stopLoad();
        this.state.upload();
      },
      error => {
        this.state.stopLoad();
        this.state.removeUpload();
        console.error(error);
      }
    );
  }
}
