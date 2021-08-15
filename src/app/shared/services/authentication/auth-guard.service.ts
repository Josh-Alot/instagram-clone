import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService) { }

  canActivate(): boolean {
    console.log(this.authService.isAuthenticated());
    return this.authService.isAuthenticated();
  }
}
