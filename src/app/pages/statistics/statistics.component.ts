import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from '../../parser/JSONstats.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  highScore: number;
  highScoreDate: string;
  totLength: number;
  notFound: number;
  movies: number;
  titlesConsumed: number;


  constructor(private backendClient: BackendClientService) { }

  ngOnInit() {

    this.backendClient.titlesWatched.subscribe((titles: number) => {
      this.titlesConsumed = titles;
    })

    this.backendClient.statistics.subscribe((data: JSONstats) => {

      if (data) {
        console.log(data);
        //console.log(data['result'])
        this.totLength = data['runtime'];
        this.notFound = data['not_found'];
        this.movies = data['movies'];
        this.highScore = data['highscore'];
        this.highScoreDate = data['highscore_date'];
      }
    })
  }
}
