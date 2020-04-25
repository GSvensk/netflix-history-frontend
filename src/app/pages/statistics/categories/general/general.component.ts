import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../../../services/gateway/gateway.service';
import { JSONstats } from '../../../../models/JSONstats.model';


@Component({
  selector: 'app-category',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

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
