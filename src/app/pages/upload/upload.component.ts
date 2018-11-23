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

  titlesConsumed: number;
  fin: boolean = false;

  constructor(private papa: Papa,
    private backendClient: BackendClientService) { }

  ngOnInit() {
  }

  uploadFile($event) {
    //console.log($event.target.files[0]); // outputs the first file
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
    this.fin = true;
    let json: Map<string, string> = new Map<string, string>();

    content.forEach(item => {
      json[item[0]] = item[1]
    })

    this.backendClient.getResults(json).subscribe((data: JSONstats) => {
      data = JSON.parse(data.toString());
      //console.log(data);
      this.backendClient.stats = of(data);
      this.upload.emit(null);
      //this.fin = true;
    })
  }

  parseTitle(title: string) {
    title = title.split(':')[0]
    title = title.replace("(U.S.)", "")
    title = title.replace("(U.K.)", "")
    title = title.replace('’', "'")
    return encodeURI(title)
  }
}

