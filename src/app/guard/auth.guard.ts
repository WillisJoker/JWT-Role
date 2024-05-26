import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
};
