/**
 * Created by Toni on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';
import {ActivatedRoute} from '@angular/router';


@Component({
  providers: [DataCars],
  templateUrl: 'cardetail.component.html',
})

export class CarDetailComponent implements OnInit {

  radius: number;
    car: Car;
   id = this.route.snapshot.paramMap.get('id');

  constructor(private data: DataCars, private route: ActivatedRoute) {}

  ngOnInit() {

    this.data.getCarById(this.id).then((dataReceived) => {

      this.car = dataReceived[0];
    });

  }

}
