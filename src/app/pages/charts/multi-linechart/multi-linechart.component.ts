import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { GatewayService } from '../../../services/gateway/gateway.service';
import { JSONstats } from 'src/app/models/JSONstats.model';
import { MonthlyViewingTime } from 'src/app/models/MonthlyViewingTime';


@Component({
  selector: 'app-multi-linechart',
  templateUrl: './multi-linechart.component.html',
  styleUrls: ['./multi-linechart.component.css']
})
export class MultiLinechartComponent implements OnInit {

  public lineChartType: string = 'line';
  lineColor: string = '#db0000';
  legend: boolean = true;

  parse(monthly: MonthlyViewingTime[]) {
    const startyear: number = +monthly[0].date.substring(0, 4)
    
    monthly.forEach((month) => {
      const year = +month.date.substring(0, 4)
      const monIndex = (+month.date.substring(5)) - 1
      const index = year - startyear
      if (this.years[index] == null) {
        const line = { "data": new Array(12).fill(NaN), "label": String(year), fill: false }
        this.years.push(line)
        this.colors.push(this.redOffset(index))
      }
      if (isNaN(this.years[index].data[monIndex])) {
        this.years[index].data[monIndex] = (month.runtime / 60)  
      } else {
        this.years[index].data[monIndex] += (month.runtime / 60)
      }
    }
    );
  }

  redOffset = (index) => {
    const decrease = (255 - 30*index) % 255
    const increase = (60*index) % 255
    return {
      backgroundColor: `rgba(${255 - 30*index},${increase},${increase},0.8)`,
      borderColor: `rgba(${255 - 30*index},${increase},${increase},0.8)`,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#222',
      pointHoverBackgroundColor: `rgba(${255 - 30*index},${increase},${increase},0.8)`,
      pointHoverBorderColor: `rgba(${255 - 30*index},${increase},${increase},0.8)`
    }
  }

  colors: Color[] = [
    
  ];
  

  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        stacked: false,
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
      text: 'Viewing time - Yearly Comparison',
      fontColor: 'white',
      fontSize: 24
    }
  }

  public years: any[] = [
  ];

  public monthLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'];

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
        this.parse(data.monthly);
      }
    })
  }

  ngOnInit() {
  }
}
