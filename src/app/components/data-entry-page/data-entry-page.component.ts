import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DataEntryFormComponent } from '../data-entry-form/data-entry-form.component';

@Component({
  selector: 'app-data-entry-page',
  standalone: true,
  imports: [
    MatCardModule,
    DataEntryFormComponent
  ],
  templateUrl: './data-entry-page.component.html',
  styleUrl: './data-entry-page.component.scss'
})
export class DataEntryPageComponent {

  constructor() {}
}
