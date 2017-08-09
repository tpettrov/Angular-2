/**
 * Created by Toni on 8/6/2017.
 */
import { Component } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';

@Component({
  templateUrl: './carform.component.html',
})

export class CarFormComponent {

  constructor(private data: DataCars) {}
  makes = ['Mazda', 'Toyota', 'Honda'];
  currentCar = new Car('', '', '');

  onSubmit() {
    this.data.addCar(this.currentCar);
  }



}
