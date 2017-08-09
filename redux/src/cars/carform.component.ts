/**
 * Created by Toni on 8/6/2017.
 */
import { Component } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';
import {Router} from '@angular/router';

@Component({
  templateUrl: './carform.component.html',
})

export class CarFormComponent {

  constructor(private data: DataCars, private  router: Router) {}
  makes = ['Mazda', 'Toyota', 'Honda'];
  currentCar = new Car('', '', '');

  onSubmit() {
    this.data.addCar(this.currentCar);
    this.router.navigateByUrl('cars/all');
  }



}
