import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from '../../parser/JSONstats.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  titlesConsumed: number;
  stats: JSONstats;

  constructor(private backendClient: BackendClientService) { }

  ngOnInit() {

    this.backendClient.titlesWatched.subscribe((titles: number) => {
      this.titlesConsumed = titles;
    })

    this.backendClient.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.stats = data;
        console.log(data);
      }
    })
  }
}
