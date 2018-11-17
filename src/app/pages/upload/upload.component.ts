import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { TmdbClientService } from '../../tmdbrequests/tmdb-client.service';
import { BackendClientService } from '../../parser/backend-client.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';


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

    console.log(json)

    const obj = [...json].reduce((o, [key, value]) => (o[key] = value, o), {});
    console.log(obj);

    this.titlesConsumed = content.length;

    this.backendClient.getResults(json).subscribe(data => {
      console.log(data);
    })
    
    /*
    let counter = 0;

    content.forEach(item => {
      let date: string = item[1]//.substr(-11, 10);
      let title: string = item[0];//.substr(0, item[0].length - 13);

      title = this.parseTitle(title);

      if (!this.dates.has(date)) {
        this.dates.set(date, 0);
      }



      if (this.mediaLengths.has(title)) {
        this.totLength += this.mediaLengths.get(title);
        this.dates.set(date, this.dates.get(date) + this.mediaLengths.get(title));
        counter++;
        if (counter == content.length) {
          this.fin = true;
        }
        return;
      } else {
        //console.log("request: " + title);
        this.tmdbClient.multiSearch(title).subscribe(
          async response => {
            console.log(response.headers.get("X-RateLimit-Remaining"))
            if (response.headers.get("X-RateLimit-Remaining") == "0") {

              await sleep(10000);
              console.log("After sleep:  " + new Date().toString());
            }

            counter++;
            if (counter == content.length) {
              this.fin = true;
            }

            if (typeof response.body['results'][0] === 'undefined') {
              this.notFound++;
              console.log(title)
              return;
            }
            let mostProbableResult = response.body['results'][0]

            this.tmdbClient.mediasearch(mostProbableResult['id'], mostProbableResult['media_type']).subscribe(
              async response => {
                console.log(response.headers.get("X-RateLimit-Remaining"))

                if (response.headers.get("X-RateLimit-Remaining") == "0") {
                  await sleep(10000);
                  console.log("After MEDIA sleep:  " + new Date().toString());
                }

                let result = response.body;
                let runtime: number = 0;

                if (mostProbableResult['media_type'] == 'movie') {
                  if (!isNaN(result['runtime'])) {
                    runtime = result['runtime']
                  }

                } else if (mostProbableResult['media_type'] == 'tv') {
                  if (!isNaN(result['episode_run_time'][0])) {
                    runtime = result['episode_run_time'][0]
                  }

                  if (result['episode_run_time'].length > 1) {
                    //console.log("multiple runtimes")
                  }
                } else {
                  console.log("UNKNOWN MEDIA TYPE")
                }
                this.totLength += runtime;
                this.mediaLengths.set(title, runtime);

                let totrun = this.dates.get(date) + runtime;
                this.dates.set(date, totrun);

                if (this.dates.get(date) + runtime > this.highScore) {
                  this.highScore = totrun;
                  this.highScoreDate = date;
                }
              },
              async err => {
                console.log("MEDIA ERROR");
                console.log(err);
                this.notFound++;
                await sleep(10000);
                console.log("After ERROR sleep:  " + new Date().toString());
              })
          },
          async err => {
            console.log(err);
            this.notFound++;
            await sleep(10000);
            console.log("After ERROR sleep:  " + new Date().toString());
          },
        );
      }
    });
    */
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

