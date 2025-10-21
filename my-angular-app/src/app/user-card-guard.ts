import { CanActivateFn } from '@angular/router';

export const userCardGuard: CanActivateFn = (route, state) => {
  return true;
};
