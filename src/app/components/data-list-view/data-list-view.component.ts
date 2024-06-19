import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AnalyticsDataFetchService } from '../../shared/services/analytics-data-fetch.service';

import { AnalyticsData } from '../../shared/interfaces/analytics-data.interface';

@Component({
  selector: 'app-data-list-view',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './data-list-view.component.html',
  styleUrl: './data-list-view.component.scss'
})
export class DataListViewComponent implements OnInit {

  data: AnalyticsData[];
  error: string;

  panelOpenState = false;

  constructor(
    // private _router: Router,
    private _dataFetchService: AnalyticsDataFetchService
  ) {}

  ngOnInit(): void {
    this._dataFetchService.fetchData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}
