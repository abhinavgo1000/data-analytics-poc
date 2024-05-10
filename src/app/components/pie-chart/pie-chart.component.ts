import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {

  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            data: [50, 60, 70, 180, 190],
          },
        ],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
