/**
 * Created by apetrov on 8/2/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsHome} from './cars/carsHome.component'


const routes: Routes = [
  { path: '', component: CarsHome }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
