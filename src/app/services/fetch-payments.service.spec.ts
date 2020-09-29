import { TestBed } from '@angular/core/testing';

import { FetchPaymentsService } from './fetch-payments.service';

describe('FetchPaymentsService', () => {
  let service: FetchPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
