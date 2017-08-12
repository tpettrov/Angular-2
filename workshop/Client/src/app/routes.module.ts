import { RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component';
import {NgModule} from '@angular/core';
import {PrivateRoute} from './common/private-route';
import {StatsComponent} from './stats/stats.component';
import {AddCarComponent} from "./cars/add-car.component";
import {ListCarsComponent} from "./cars/list-cars.component";
import {CarDetailsComponent} from "./cars/car-details.component";

const routes: Routes = [
  {path: '', component: StatsComponent },
  {path: 'users/register', component: RegisterComponent },
  {path: 'users/login', component: LoginComponent },
  {path: 'cars/all', component: ListCarsComponent },
  {path: 'cars/details/:id', component: CarDetailsComponent },
  {path: 'cars/add',
  component: AddCarComponent,
  canActivate: [PrivateRoute]}
  ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CarRoutesModule {}

