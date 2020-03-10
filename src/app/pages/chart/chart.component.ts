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

  barColor: string = '#db0000';

  public barChartOptions: any = {
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

  public yearTitle: any = {
    title: {
      display: true,
      text: 'Total Hours per Year',
      fontColor: 'white',  // chart title color (can be hexadecimal too)
    }
  }

  public monthTitle: any = {
    title: {
      display: true,
      text: 'Total Hours per Month',
      fontColor: 'white',  // chart title color (can be hexadecimal too)
    }
  }

  public dayTitle: any = {
    title: {
      display: true,
      text: 'Total Hours per Day',
      fontColor: 'white',  // chart title color (can be hexadecimal too)
    }
  }

  public YearChartOptions: any = {...this.barChartOptions, ...this.yearTitle};
  public MonthChartOptions: any = {...this.barChartOptions, ...this.monthTitle};
  public DayChartOptions = {...this.barChartOptions, ...this.dayTitle};

  public yearOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public weekdayLabels: string[] = ['Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public monthLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'Novemeber', 'December'];
  public yearLabels: string[] = [];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public weekdays: BarChartData[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Hours' }
  ];

  public months: any[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Hours' }
  ];

  public years: BarChartData[] = [
    { data: [], label: 'Hours' }
  ];

  public chartColors: any[] = [
    {
      backgroundColor: new Array(7).fill(this.barColor)
    }
  ]

  public yearColors: any[] = [
    { backgroundColor: [] }
  ]
  
  public monthColors: any[] = [
    { backgroundColor: new Array(12).fill(this.barColor) }
  ]

  constructor(private backendClient: BackendClientService) {

    this.backendClient.stats.subscribe((data: JSONstats) => {
      if (data) {
        this.weekdays[0].data = data.weekdays;
        this.months[0].data = data.months;
        this.parseYears(data.years);
      }
    })
  }

  parseYears(years: Object) {
    Object.entries(years).forEach(
      ([key, value]) => {
        this.yearColors[0].backgroundColor.push(this.barColor);
        this.yearLabels.push(key)
        this.years[0].data.push(value)
      }
    );
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
  }
}
