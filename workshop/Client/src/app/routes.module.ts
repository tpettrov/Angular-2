import { RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component';
import {NgModule} from '@angular/core';

const routes: Routes = [

  {path: 'users/register', component: RegisterComponent },
  {path: 'users/login', component: LoginComponent }

  ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarRoutesModule {}

