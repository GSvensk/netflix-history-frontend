import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { BackendClientService } from '../../parser/backend-client.service';
import { FormatService } from '../../parser/format-service/format.service';
import { JSONstats } from 'src/app/parser/JSONstats.model';
import { of } from 'rxjs';
import { ScrollService } from 'src/app/shared/scroll.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Output() upload: EventEmitter<any> = new EventEmitter();
  @Output() load: EventEmitter<any> = new EventEmitter();
  titlesConsumed: number;
  loading: boolean = false;

  constructor(
    private papa: Papa,
    private backendClient: BackendClientService,
    private scroller: ScrollService,
    private formatter: FormatService
    ) { }

  ngOnInit() {
  }

  uploadFile($event) {
    //console.log($event.target.files[0]); // outputs the first file
    this.loading = true;
    this.scroller.triggerScrollTo();
    this.papa.parse($event.target.files[0], {
      complete: (result) => {
        this.parseFile(result['data'])
      }
    });
  }

  parseFile(content: string[][]) {

    content.shift();
    content.pop();
    this.titlesConsumed = content.length;
    this.load.emit(content.length);
    this.backendClient.titlesConsumed = of(content.length);
    const json: Map<string, string> = new Map<string, string>();

    content.forEach(item => {
      json[item[0]] = item[1]
    })

    this.backendClient.getResults(json).subscribe((data: JSONstats) => {
      //console.log(data);
      data = this.formatter.format(data);
      this.backendClient.stats = of(data);
      this.load.emit(null);
      this.upload.emit(null);
      this.loading = false;
    }, error => {
      console.log(error);
      this.load.emit(null);
      this.upload.emit(null);
      this.loading = false;
    });
  }
}

