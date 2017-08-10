import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';

import {RegisterComponent} from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [FormsModule, CommonModule],
  providers: [UsersService]
})
export class UsersModule {}
