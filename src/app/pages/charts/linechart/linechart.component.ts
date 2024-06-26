import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { GatewayService } from '../../../services/gateway/gateway.service';
import { JSONstats } from 'src/app/models/JSONstats.model';
import { MonthlyViewingTime } from 'src/app/models/MonthlyViewingTime';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  lineChartType = 'line';
  lineColor = '#db0000';
  legend = true;

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
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          maxTicksLimit: 16
        }
      }],
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
      text: 'Viewing Time',
      fontColor: 'white',  // chart title color (can be hexadecimal too)
      fontSize: 24
    }
  };

  public months: any[] = [
    { data: [], label: 'Hours' }
  ];
  public monthLabels: string[] = [];

  chartColors: any[] = [
    {
      backgroundColor: new Array(7).fill(this.lineColor)
    }
  ];

  MonthChartOptions: any = { ...this.lineChartOptions, ...this.title };

  parseMonthly(monthly: MonthlyViewingTime[]) {
    monthly.forEach((month) => {
      this.monthLabels.push(month.date);
      this.months[0].data.push(month.runtimeMinutes / 60);
    }
    );
  }

  // events
  chartClicked(e: any): void {

  }

  chartHovered(e: any): void {

  }

  constructor(private gateway: GatewayService) {
    this.gateway.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.parseMonthly(data.monthly);
      }
    });
  }

  ngOnInit() {
  }
}
