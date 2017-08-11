import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit, OnDestroy {

  authenticated: boolean = false;
  username: string = null;
  subscription: Subscription;

  constructor(private auth: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.authenticated = this.auth.isUserAuthenticated();
    this.username = this.auth.getUser();
    console.log(this.username);
  }

  logout() {
    this.authenticated = this.auth.deauthenticateUser();
    this.username = this.auth.removeUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
