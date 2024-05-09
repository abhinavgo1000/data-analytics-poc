import { TestBed } from '@angular/core/testing';

import { AnalyticsDataFetchService } from './analytics-data-fetch.service';

describe('AnalyticsDataFetchService', () => {
  let service: AnalyticsDataFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsDataFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
