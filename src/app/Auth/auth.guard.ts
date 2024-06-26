import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const token = localStorage.getItem('token');
  //const decodedToken = jwt_decode(token);
  if(token != null){
    //router.navigateByUrl('/home');
    return true;
  }
  else{
  router.navigateByUrl('/login');
  return false;
  }
};
function jwt_decode(token: string | null) {
  throw new Error('Function not implemented.');
}

