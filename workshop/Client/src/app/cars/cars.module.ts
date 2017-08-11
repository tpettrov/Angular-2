import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AddCarComponent} from "./add-car.component"
import {FormsModule} from "@angular/forms"
import {CarsService} from "./cars.service";

@NgModule({
  declarations: [AddCarComponent],
  imports: [FormsModule],
  providers: [CarsService]
})

export class CarsModule {}
