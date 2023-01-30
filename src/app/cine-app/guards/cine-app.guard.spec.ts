import { TestBed } from '@angular/core/testing';

import { CineAppGuard } from './cine-app.guard';

describe('CineAppGuard', () => {
  let guard: CineAppGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CineAppGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
