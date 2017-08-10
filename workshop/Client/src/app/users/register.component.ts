import { Component } from '@angular/core';
import {User} from './user-model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user: User;
}
