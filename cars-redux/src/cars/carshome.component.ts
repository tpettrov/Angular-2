/**
 * Created by apetrov on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';

import { store } from '../store/store';
import { IAppState } from '../store/IAppState';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import {CarsActions} from './cars.actions';


@Component({
  providers: [CarsActions],
  templateUrl: 'carshome.component.html',
  styleUrls: ['./carshome.component.css']
})
export class CarsHomeComponent implements OnInit {

  cars: Car[];
  @select('carsHome') carsHome$: Observable<Car>;

  constructor(private ngRedux: NgRedux<IAppState>, private carsAction: CarsActions ) { }

  // updateFromStore() {
  //   const allState = store.getState();
  //   this.cars = allState.carsHome;
  // }


  ngOnInit () {

    this.carsAction.getCars();

  }

}
