import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';

import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [FormsModule, CommonModule],
  providers: [UsersService]
})
export class UsersModule {}
