import { TestBed } from '@angular/core/testing';

import { AnalyticsDataPostService } from './analytics-data-post.service';

describe('AnalyticsDataPostService', () => {
  let service: AnalyticsDataPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsDataPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
