import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-pie-chart-page',
  standalone: true,
  imports: [
    MatCardModule,
    PieChartComponent
  ],
  templateUrl: './pie-chart-page.component.html',
  styleUrl: './pie-chart-page.component.scss'
})
export class PieChartPageComponent {

}
