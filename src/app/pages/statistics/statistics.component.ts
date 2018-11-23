import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from '../../parser/JSONstats.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  highScore: number = -1;
  highScoreDate: string;
  totLength: number = 0;
  notFound: number = 0;

  constructor(private backendClient: BackendClientService) { }

  ngOnInit() {

    this.backendClient.statistics.subscribe((data: JSONstats) => {

      if (data) {
        console.log(data);

        //console.log(data['result'])
        this.totLength = data['runtime'];
        this.notFound = data['not_found'];
        this.highScore = data['highscore'];
        this.highScoreDate = data['highscore_date'];
      }
    })
  }
}
