import { TestBed } from '@angular/core/testing';

import { ApiEverythingService } from './api-everything.service';

describe('ApiEverythingService', () => {
  let service: ApiEverythingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEverythingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
