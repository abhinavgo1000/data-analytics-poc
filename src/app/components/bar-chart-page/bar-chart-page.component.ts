import { Component } from '@angular/core';

import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-bar-chart-page',
  standalone: true,
  imports: [
    BarChartComponent
  ],
  templateUrl: './bar-chart-page.component.html',
  styleUrl: './bar-chart-page.component.scss'
})
export class BarChartPageComponent {

  constructor() {}
}
