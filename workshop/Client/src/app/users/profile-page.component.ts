import {Component, OnInit} from "@angular/core";
import {CarsService} from "../cars/cars.service";
import {MessageService} from "../common/message.service";
import {DeleteCarModel} from "../cars/deleteCar.model";

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

  constructor(private carService: CarsService, private msgService: MessageService) {}

  userCars: Array<DeleteCarModel> = [];
  ngOnInit() {

    this.carService.getUserCars().subscribe((userCars) => {

      this.userCars = userCars;
    });

  }

  delete(id) {
    this.carService.deleteCar(id).subscribe((res) => {
      if (!res.success) {
        this.msgService.parseMessage(res);
      }else {
        this.msgService.sendMessage(res.message);
        this.userCars = this.userCars.filter((car) => {
          return car.id !== id;
        });
      }
    });
  }
}
