/**
 * Created by apetrov on 8/2/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Car} from '../cars/car.model';
import {IAppState} from '../store/IAppState';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {CarsActions} from './cars.actions';


@Component({
  templateUrl: './carshome.component.html',
  styleUrls: ['./carshome.component.css']
})
export class CarsHomeComponent implements OnInit {
  @select('carsHome') cars: Observable<Car>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private carsAction: CarsActions) {
  }


  ngOnInit() {
    this.carsAction.getCars();
  }

}
