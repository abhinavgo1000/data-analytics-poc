import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AnalyticsData } from '../interfaces/analytics-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataFetchService {

  private apiUrl = 'http://localhost:5000/analytics/fetch-data';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<AnalyticsData> {
    return this.http.get<AnalyticsData>(this.apiUrl);
  }

  fetchDataById(id: string): Observable<AnalyticsData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AnalyticsData>(url);
  }
}
