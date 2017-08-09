/**
 * Created by Toni on 8/6/2017.
 */
import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {DataCars} from '../app/data_cars';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './carform.component.html',
})

export class EditCarFormComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  constructor(private data: DataCars, private route: ActivatedRoute) {}
  makes = ['Mazda', 'Toyota', 'Honda'];
  currentCar;

  ngOnInit() {
   this.data.getCarById(this.id).then((car) => {
     this.currentCar = car[0];
     console.log(this.currentCar);
   });
  }
  onSubmit() {
    this.data.addCar(this.currentCar);
  }



}
