import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AnalyticsData } from '../interfaces/analytics-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataUpdateService {

  private apiUrl = 'http://localhost:5000/analytics/update-data';

  constructor(@Inject(String) private http: HttpClient) { }

  updateData(analyticsData: AnalyticsData, id: string): Observable<AnalyticsData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<AnalyticsData>(url, analyticsData);
  }
}
