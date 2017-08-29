import {Component} from '@angular/core';
import {User} from './user-model';
import {UsersService} from './users.service';
import {MessageService} from '../common/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private usersService: UsersService, private msgService: MessageService, private router: Router) {
  }

  user: User = new User();

  register() {
    this.usersService.register(this.user)
      .subscribe(res => {
        if (!res.success) {
          this.msgService.parseMessage(res);
        } else {
          this.msgService.sendMessage('Successfully registered!');
          this.router.navigateByUrl('users/login');
        }
      });
  }
}
