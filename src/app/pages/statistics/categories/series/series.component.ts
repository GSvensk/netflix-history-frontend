import { Component, OnInit } from '@angular/core';
import { JSONstats } from '../../../../models/JSONstats.model';
import { GatewayService } from '../../../../services/gateway/gateway.service';


@Component({
  selector: 'stat-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  stats: JSONstats;

  constructor(private gateway: GatewayService) { }

  ngOnInit() {
    this.gateway.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.stats = data;
      }
    })
  }
}
