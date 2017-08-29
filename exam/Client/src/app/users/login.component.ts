import {Component} from '@angular/core';
import {User} from './user-model';
import {UsersService} from './users.service';
import {MessageService} from '../common/message.service';
import {Router} from '@angular/router';
import {AuthService} from '../common/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private usersService: UsersService, private msgService: MessageService, private router: Router, private auth: AuthService) {
  }

  user: User = new User();

  login() {
    this.usersService.login(this.user)
      .subscribe(res => {
        if (!res.success) {
          this.msgService.parseMessage(res);
        } else {
          this.auth.authenticateUser(res.token);
          this.auth.saveUser(res.user.name);
          this.msgService.sendMessage('Successfully login!');
          this.router.navigateByUrl('');
        }
      });
  }
}
