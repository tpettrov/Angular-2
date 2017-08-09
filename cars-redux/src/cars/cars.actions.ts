/**
 * Created by Toni on 8/9/2017.
 */
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/IAppState';
import { Injectable } from '@angular/core';
export const GET_HOME_CARS = 'CARS/HOME';
import {DataCars} from '../app/data_cars';

@Injectable() // Add it to the providers array
export class CarsActions {
  constructor (private ngRedux: NgRedux<IAppState>, private data: DataCars) { }
  getCars() {
    this.data.getFirstSixCars()
      .then(cars => {
        this.ngRedux.dispatch({
          type: GET_HOME_CARS,
          cars
        });
      });
  }
}
