import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway/gateway.service';
import { JSONstats } from 'src/app/models/JSONstats.model';
import { BarChartData } from './barChartData.model';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public weekdayLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public monthLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'];
  public yearLabels: string[] = [];

  public weekdays: BarChartData[] = [
    { data: new Array(7).fill(0), label: 'Hours' }
  ];

  public months: BarChartData[] = [
    { data: new Array(12).fill(0), label: 'Hours' }
  ];

  public years: BarChartData[] = [
    { data: [], label: 'Hours' }
  ];

  constructor(private backendClient: GatewayService) {

    this.backendClient.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.weekdays[0].data = data.weekdays.map(x => x / 60);
        this.months[0].data = data.months.map(x => x / 60);
        this.parseYears(data.years);
      }
    });
  }

  parseYears(years: Object) {
    Object.entries(years).forEach(
      ([key, value]) => {
        this.yearLabels.push(key);
        this.years[0].data.push(value / 60);
      }
    );
  }

  ngOnInit() {
  }
}
