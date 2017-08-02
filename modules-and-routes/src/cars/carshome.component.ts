/**
 * Created by apetrov on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';


@Component({
  providers: [DataCars],
  templateUrl: 'carshome.component.html',
  styleUrls: ['./carshome.component.css']
})
export class CarsHomeComponent implements OnInit {

  cars: Car[];

  constructor(private data: DataCars) {}

  ngOnInit () {

    this.data.getFirstSixCars().then((dataReceived) => {

      this.cars = dataReceived;

    });

  }

}
