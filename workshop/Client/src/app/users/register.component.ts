import { Component } from '@angular/core';
import {User} from './user-model';
import {UsersService} from './users.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private usersService: UsersService) {}
  user: User = new User();
  register() {
    this.usersService.register(this.user)
      .subscribe(res => console.log(res));
  }
}
