import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AnalyticsData } from '../interfaces/analytics-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataDeleteService {

  private apiUrl = 'http://localhost:5000/analytics/delete-data';

  constructor(private http: HttpClient) { }
}
