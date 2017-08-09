/**
 * Created by Toni on 8/2/2017.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes/routes.module';
import {CarsHomeComponent} from '../cars/carshome.component';
import {DataCars} from '../app/data_cars';
import {CarsAllComponent} from './carsall.component';
import {CarDetailComponent} from '../cars/cardetail.component';
import {CarFormComponent} from './carform.component';
import {EditCarFormComponent} from './editcarform.component.html';
import { FormsModule } from '@angular/forms';
import {ImageDirective} from './imageDirective.directive'

@NgModule({
  declarations: [
    CarsHomeComponent,
    CarsAllComponent,
    CarDetailComponent,
    CarFormComponent,
    EditCarFormComponent,
    ImageDirective
  ],
  imports: [
    CommonModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [DataCars],
  exports:  []

})
export class CarsModule { }
