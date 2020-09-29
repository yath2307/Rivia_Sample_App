import { TestBed } from '@angular/core/testing';

import { TypeOrderServiceService } from './type-order-service.service';

describe('TypeOrderServiceService', () => {
  let service: TypeOrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
