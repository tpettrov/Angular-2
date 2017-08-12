import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "./cars.service";
import {MessageService} from "../common/message.service";
import {ReviewModel} from "./review.model";

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService, private msgService: MessageService) {}
  car: object;
  id: number = 0;
  likes: number = 0;
  review: ReviewModel = new ReviewModel(5);
  reviews: Array<ReviewModel> = [];

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
      const id = params['id'];
      this.carsService.getCarbyId(id).subscribe((car) => {
        this.car = car;
        this.id = car.id;
        this.likes = car.likes;
        this.carsService.getReviews(id).subscribe((reviews) => {
          this.reviews = reviews;
        });
      });
      });

  }
  like() {
  this.carsService.like(this.id).subscribe(res => {
    if (!res.success) {
      this.msgService.parseMessage(res);
    } else {
      this.likes++;
      this.msgService.sendMessage(res.message);
    }
  });
  }
  addReview() {
    this.carsService.addReview(this.id, this.review).subscribe(res => {
      if (!res.success) {
        this.msgService.parseMessage(res);
      }else {
        this.msgService.sendMessage(res.message);
        this.reviews.push(res.review);
      }
    });
  }
}
