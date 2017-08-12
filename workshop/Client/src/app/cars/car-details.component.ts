import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "./cars.service";
import {MessageService} from "../common/message.service";

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService, private msgService: MessageService) {}
  car: object;
  id: number = 0;
  likes: number = 0;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
      const id = params['id'];
      this.carsService.getCarbyId(id).subscribe((car) => {
        this.car = car;
        this.id = car.id;
        this.likes = car.likes;
      });
      });
  }
  like() {
  this.carsService.like(this.id).subscribe(res => {
    if (!res.success) {
      this.msgService.parseMessage(res);
    } else {
      this.likes++;
    }
  });
  }
}
