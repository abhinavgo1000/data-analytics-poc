import { TestBed } from '@angular/core/testing';

import { AnalyticsDataUpdateService } from './analytics-data-update.service';

describe('AnalyticsDataUpdateService', () => {
  let service: AnalyticsDataUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsDataUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
