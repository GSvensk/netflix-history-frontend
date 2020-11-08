import { Component, Input, OnInit } from '@angular/core';

interface BarChartData {
  data: number[];
  label: string;
}


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  barColor: string = 'rgba(255,0,0,0.6)';
  chartTitleFontSize = 24;
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  chartOptions: any = {
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

  @Input() titleText: string
  @Input() dataset: BarChartData[]
  @Input() labels: string[]
  colors: any = [
    {
      backgroundColor: new Array(24).fill(this.barColor)
    }
  ]


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      ...this.chartOptions,
      title: {
        display: true,
        text: this.titleText,
        fontColor: 'white',
        fontSize: this.chartTitleFontSize
      }
    }
  }
}
