import { Component, OnInit } from '@angular/core';
import { JSONstats } from '../../../../models/JSONstats.model';
import { GatewayService } from '../../../../services/gateway/gateway.service';


@Component({
  selector: 'stat-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  stats: JSONstats;

  constructor(private gateway: GatewayService) { }

  ngOnInit() {
    this.gateway.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.stats = data;
      }
    });
  }
}
