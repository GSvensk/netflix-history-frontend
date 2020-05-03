import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { GatewayService } from '../../../services/gateway/gateway.service';
import { JSONstats } from 'src/app/models/JSONstats.model';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  lineChartType = 'line';
  lineColor: string = '#db0000';
  legend: boolean = true;

  parseMonthly(monthly: Object) {
    Object.entries(monthly).forEach(
      ([key, value]) => {
        this.monthLabels.push(key)
        this.months[0].data.push(value)
      }
    );
  }

  colors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          color: '#564d4d'
        }
      }]
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
      },
    }
  };

  title: any = {
    title: {
      display: true,
      text: 'Total runtime',
      fontColor: 'white',  // chart title color (can be hexadecimal too)
      fontSize: 24
    }
  }

  public months: any[] = [
    { data: [], label: 'Hours' }
  ];
  public monthLabels: string[] = [];

  chartColors: any[] = [
    {
      backgroundColor: new Array(7).fill(this.lineColor)
    }
  ]

  // events
  chartClicked(e: any): void {

  }

  chartHovered(e: any): void {

  }

  MonthChartOptions: any = { ...this.lineChartOptions, ...this.title };

  constructor(private gateway: GatewayService) {
    this.gateway.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.parseMonthly(data.monthly);
      }
    })
  }

  ngOnInit() {
  }
}
