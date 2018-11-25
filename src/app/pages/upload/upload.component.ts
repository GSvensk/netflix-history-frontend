import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from 'src/app/parser/JSONstats.model';
import { of } from 'rxjs';


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

  constructor(private papa: Papa,
    private backendClient: BackendClientService) { }

  ngOnInit() {
  }

  uploadFile($event) {
    //console.log($event.target.files[0]); // outputs the first file
    this.loading = true;
    this.load.emit(null);
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
    this.backendClient.titlesConsumed = of(content.length);
    let json: Map<string, string> = new Map<string, string>();

    content.forEach(item => {
      json[item[0]] = item[1]
    })

    this.backendClient.getResults(json).subscribe((data: JSONstats) => {
      data = JSON.parse(data.toString());
      //console.log(data);
      this.backendClient.stats = of(data);
      this.load.emit(null);
      this.upload.emit(null);
      this.loading = false;
    })
  }
}

