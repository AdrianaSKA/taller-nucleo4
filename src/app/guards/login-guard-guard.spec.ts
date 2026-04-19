import { TestBed } from '@angular/core/testing';
import { loginGuardGuard } from './login-guard-guard';
import { CanActivateFn } from '@angular/router';



describe('loginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => loginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
