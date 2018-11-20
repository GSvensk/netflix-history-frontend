import { Component, OnInit } from '@angular/core';
import { BackendClientService } from '../../parser/backend-client.service';
import { JSONstats } from 'src/app/parser/JSONstats.model';
import { BarChartData } from './barChartData.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: BarChartData[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public barChart: BarChartData[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Weekdays' }
  ];

  constructor(private backendClient: BackendClientService) {
    this.backendClient.statistics.subscribe((data: JSONstats | null) => {
      //console.log(Array.from(data.weekdays.values()))
      this.barChart[0].data = data.weekdays;
    })
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {

  }

}
