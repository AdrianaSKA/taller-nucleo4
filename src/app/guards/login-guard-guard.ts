import { CanActivateFn } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  
const usuarios = localStorage.getItem('usuario');

  if (usuarios) {return true;} 
  else {return false;}
};