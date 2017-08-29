import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {Router} from "@angular/router";

@Injectable()
export class PrivateRoute implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.auth.isUserAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/users/login');
      return false;
    }
  }
}
