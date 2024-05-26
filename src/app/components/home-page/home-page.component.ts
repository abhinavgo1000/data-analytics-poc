import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { IconRoutingButtonComponent } from '../icon-routing-button/icon-routing-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    IconRoutingButtonComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor() {}
}
