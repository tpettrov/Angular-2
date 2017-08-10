import { Component } from '@angular/core';
import {User} from './user-model';
import {UsersService} from './users.service';
import {MessageService} from '../common/message.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private usersService: UsersService, private msgService: MessageService) {}
  user: User = new User();
  register() {
    this.usersService.register(this.user)
      .subscribe(res => console.log(res));
    this.msgService.sendMessage('Works');
  }
}
