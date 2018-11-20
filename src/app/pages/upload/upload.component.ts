import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { TmdbClientService } from '../../tmdbrequests/tmdb-client.service';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from 'src/app/parser/JSONstats.model';
import { of } from 'rxjs';


function sleep(ms) {
  console.log("Before sleep: " + new Date().toString());
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  mediaLengths: Map<string, number> = new Map<string, number>();
  dates: Map<string, number> = new Map<string, number>();
  totLength: number = 0;
  notFound: number = 0;
  titlesConsumed: number;
  highScore: number = -1;
  highScoreDate: string;
  fin: boolean = false;

  constructor(private papa: Papa,
    private tmdbClient: TmdbClientService,
    private backendClient: BackendClientService) { }

  ngOnInit() {
  }

  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file

    this.papa.parse($event.target.files[0], {
      complete: (result) => {
        this.parseFile(result['data'])
      }
    });
  }

  parseFile(content: string[][]) {
    
    content.shift();
    content.pop();
    console.log(content);

    let json: Map<string, string> = new Map<string, string>();

    content.forEach(item => {
      json[item[0]] = item[1]
    })

    this.titlesConsumed = content.length;
    
    this.backendClient.getResults(json).subscribe((data: JSONstats) => {
      data = JSON.parse(data.toString());
      console.log(data);
      this.backendClient.stats = of(data);

      //console.log(data['result'])
      this.totLength = data['runtime'];
      this.notFound = data['not_found'];
      this.highScore = data['highscore'];
      this.highScoreDate = data['highscore_date'];
    })
    
    this.fin = true;
  }

  parseTitle(title: string) {
    title = title.split(':')[0]
    title = title.replace("(U.S.)", "")
    title = title.replace("(U.K.)", "")
    title = title.replace('’', "'")
    return encodeURI(title)
  }
}

