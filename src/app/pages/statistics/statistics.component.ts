import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';
import { JSONstats } from '../../models/JSONstats.model';
import { GatewayService } from 'src/app/services/gateway/gateway.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  titlesConsumed: number;
  stats: JSONstats;

  constructor(private state: StateService, private gateway: GatewayService) { }

  ngOnInit() {
    this.state.titles.subscribe((titles: number) => {
      this.titlesConsumed = titles;
    })

    this.gateway.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.stats = data;
      }
    })
  }
}
