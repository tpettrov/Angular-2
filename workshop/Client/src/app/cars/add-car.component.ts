import {Component} from "@angular/core"
import {AddCarModel} from "./add-car.model"
import {CarsService} from "./cars.service"
import {MessageService} from "../common/message.service"
import {Router} from "@angular/router"

@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html'
})

export class AddCarComponent {

  constructor(private carsService: CarsService,
              private msgService: MessageService,
              private router: Router) {
  }

  car: AddCarModel = new AddCarModel();

  addCar() {
    this.carsService.addCar(this.car).subscribe((res) => {
      if (!res.success) {
        this.msgService.parseMessage(res);
      } else {
        this.router.navigateByUrl('cars/all');
      }
    });
  }

}

