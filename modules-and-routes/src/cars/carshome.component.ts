/**
 * Created by apetrov on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {Data} from '../app/data';


@Component({
  selector: 'cars-home',
  providers: [Data],
  templateUrl: 'carshome.component.html'
})
export class CarsHomeComponent implements OnInit{

  cars : Car[];

  constructor(private data: Data) {}

  ngOnInit () {

    this.data.getCars().then((dataReceived) => {

      this.cars = dataReceived;

    })

  }

}
