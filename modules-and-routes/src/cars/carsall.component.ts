/**
 * Created by Toni on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';


@Component({
  providers: [DataCars],
  templateUrl: 'carsall.component.html',
  styleUrls: ['./carsall.component.css']
})
export class CarsAllComponent implements OnInit {

  cars: Car[];
  page = 1;
  pageSize = 3;
  currentPos = this.page * this.pageSize;

  constructor(private data: DataCars) {}

  ngOnInit () {

    this.data.getAllCars(this.page, this.currentPos).then((dataReceived) => {

      this.cars = dataReceived;

    });

  }
  sortByMake() {
    this.cars = this.cars.sort((a, b) => {
      if (a.make < b.make)
        return -1;
      if (a.make > b.make)
        return 1;
      return 0;
    });
  }
  PreviousPage() {
    this.page--;
  }
  NextPage() {
    this.page++;
  }

}
