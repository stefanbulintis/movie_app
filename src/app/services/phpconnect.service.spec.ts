import { TestBed } from '@angular/core/testing';

import { PhpconnectService } from './phpconnect.service';

describe('PhpconnectService', () => {
  let service: PhpconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
