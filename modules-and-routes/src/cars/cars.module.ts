/**
 * Created by Toni on 8/2/2017.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes/routes.module';
import {CarsHomeComponent} from '../cars/carshome.component';
import {DataCars} from '../app/data_cars';
import {CarsAllComponent} from '../cars/carsall.component';


@NgModule({
  declarations: [
    CarsHomeComponent,
    CarsAllComponent
  ],
  imports: [
    CommonModule,
    AppRoutesModule
  ],
  providers: [DataCars],
  exports:  [CarsHomeComponent]

})
export class CarsModule { }
