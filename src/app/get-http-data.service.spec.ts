import { TestBed } from '@angular/core/testing';

import { GetHttpDataService } from './get-http-data.service';

describe('GetHttpDataService', () => {
  let service: GetHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
