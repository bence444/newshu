import { TestBed } from '@angular/core/testing';

import { ApiTopHeadlinesService } from './api-top-headlines.service';

describe('ApiTopHeadlinesService', () => {
  let service: ApiTopHeadlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTopHeadlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
