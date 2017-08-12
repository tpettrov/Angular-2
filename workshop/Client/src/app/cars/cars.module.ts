import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AddCarComponent} from "./add-car.component"
import {FormsModule} from "@angular/forms"
import {CarsService} from "./cars.service";
import {ListCarsComponent} from "./list-cars.component"
import {RouterModule} from '@angular/router';
import {CarDetailsComponent} from "./car-details.component"

@NgModule({
  declarations: [AddCarComponent,
  ListCarsComponent, CarDetailsComponent],
  imports: [FormsModule, CommonModule, RouterModule],
  providers: [CarsService]
})

export class CarsModule {}
