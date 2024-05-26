import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { DataEditFormComponent } from '../data-edit-form/data-edit-form.component';

@Component({
  selector: 'app-data-edit-page',
  standalone: true,
  imports: [
    MatCardModule,
    DataEditFormComponent
  ],
  templateUrl: './data-edit-page.component.html',
  styleUrl: './data-edit-page.component.scss'
})
export class DataEditPageComponent {

  constructor(private _route: ActivatedRoute) {}
}
