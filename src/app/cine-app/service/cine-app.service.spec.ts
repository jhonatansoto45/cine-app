import { TestBed } from '@angular/core/testing';

import { CineAppService } from './cine-app.service';

describe('CineAppService', () => {
  let service: CineAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
