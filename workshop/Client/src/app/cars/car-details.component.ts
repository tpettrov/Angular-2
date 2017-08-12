import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "./cars.service"
@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService) {}
  car: object;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
      const id = params['id'];
      this.carsService.getCarbyId(id).subscribe((car) => {
        this.car = car;
      });
      });
  }
}
