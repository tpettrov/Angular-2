/**
 * Created by apetrov on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {Data} from '../app/Data';


@Component({
  selector: 'cars-home',
  providers: [Data],
  templateUrl: './carsHome.component.html'
})
export class CarsHome implements OnInit{

  cars : Car[];

  constructor(private data: Data) {}

  ngOnInit () {

    this.data.getCars().then((dataReceived) => {

      this.cars = dataReceived;

    })

  }

}
