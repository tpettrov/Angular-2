/**
 * Created by Toni on 8/6/2017.
 */
import { Component } from '@angular/core';
import {Car} from './car.model';


@Component({
  templateUrl: './carform.component.html',
})

export class CarFormComponent {


  makes = ['Mazda', 'Toyota', 'Honda'];

  currentCar = new Car('', '', '');

  onSubmit() {
    console.log('Submitted!');
  }



}
