import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const promise = this.authService.isLoggedIn();
    promise.subscribe( (continueNav: boolean) => {if (!continueNav) { this.router.navigate(['/login']); }});
    return promise;
  }
}
