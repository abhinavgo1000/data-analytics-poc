import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-line-chart-page',
  standalone: true,
  imports: [
    MatCardModule,
    LineChartComponent
  ],
  templateUrl: './line-chart-page.component.html',
  styleUrl: './line-chart-page.component.scss'
})
export class LineChartPageComponent {

  constructor() {}
}
