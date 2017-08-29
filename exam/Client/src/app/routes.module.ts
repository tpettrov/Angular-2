import { RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './users/register.component';
import {LoginComponent} from './users/login.component';
import {NgModule} from '@angular/core';
import {PrivateRoute} from './common/private-route';
import {StatsComponent} from './stats/stats.component';
import {AddAnimalComponent} from './animals/add-animal.component';
import {ListAnimalsComponent} from "./animals/list-animals.component";
import {AnimalDetailsComponent} from "./animals/animal-details.component";
import {ProfilePageComponent} from "./users/profile-page.component";

const routes: Routes = [
  {path: '', component: StatsComponent },
  {path: 'users/register', component: RegisterComponent },
  {path: 'users/login', component: LoginComponent },
  {path: 'animals/all', component: ListAnimalsComponent },
  {path: 'animals/mine', component: ProfilePageComponent },
  {path: 'animals/details/:id',
    component: AnimalDetailsComponent,
  canActivate: [PrivateRoute]},
  {path: 'animals/create',
  component: AddAnimalComponent,
  canActivate: [PrivateRoute]}
  ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutesModule {}

