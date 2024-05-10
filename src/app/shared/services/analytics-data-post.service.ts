import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AnalyticsData } from '../interfaces/analytics-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataPostService {

  private apiUrl = 'http://localhost:5000/analytics/enter-data';

  constructor(private http: HttpClient) { }

  saveData(analyticsData: AnalyticsData): Observable<AnalyticsData> {
    return this.http.post<AnalyticsData>(this.apiUrl, analyticsData);
  }
}
