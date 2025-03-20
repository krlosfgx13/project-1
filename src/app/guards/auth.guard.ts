import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const router = inject(Router);
  
  // Check if the 'session_key' cookie exists
  const isAuthenticated = cookieService.check('login_data');
  
  if (isAuthenticated) {
    // User is authenticated, allow access
    return true;
  } else {
    // User is not authenticated, redirect to login page
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "You should be logged in to access this content."
    });
    return router.navigate(['/login']).then(() => false);
  }  
};
