import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DataListViewComponent } from '../data-list-view/data-list-view.component';

@Component({
  selector: 'app-data-list-page',
  standalone: true,
  imports: [
    MatCardModule,
    DataListViewComponent
  ],
  templateUrl: './data-list-page.component.html',
  styleUrl: './data-list-page.component.scss'
})
export class DataListPageComponent {

  constructor() {}
}
