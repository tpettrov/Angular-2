/**
 * Created by apetrov on 8/2/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsHomeComponent} from '../cars/carshome.component';
import {CarsAllComponent} from '../cars/carsall.component';


const routes: Routes = [
  { path: '', component: CarsHomeComponent },
  { path: 'cars/all', component: CarsAllComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
