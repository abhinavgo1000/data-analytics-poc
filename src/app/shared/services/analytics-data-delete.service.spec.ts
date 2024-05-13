import { TestBed } from '@angular/core/testing';

import { AnalyticsDataDeleteService } from './analytics-data-delete.service';

describe('AnalyticsDataDeleteService', () => {
  let service: AnalyticsDataDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsDataDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
