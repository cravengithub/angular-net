import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userCardGuard } from './user-card-guard';

describe('userCardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userCardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
