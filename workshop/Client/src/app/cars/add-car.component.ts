import {Component} from "@angular/core"
import {AddCarModel} from "./add-car.model"
import {CarsService} from "./cars.service"

@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html'
})

export class AddCarComponent {

  constructor(private carsService: CarsService) {
  }

  car: AddCarModel = new AddCarModel('', '', null, '', null, '');

  add() {
    this.carsService.add(this.car).subscribe((res) => {
      console.log(res);
    });
  }

}

