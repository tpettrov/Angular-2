import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {AddAnimalComponent} from "./add-animal.component"
import {FormsModule} from "@angular/forms"
import {AnimalsService} from "./animals.service";
import {ListAnimalsComponent} from "./list-animals.component"
import {RouterModule} from "@angular/router"
import {AnimalDetailsComponent} from "./animal-details.component"
import {KeysPipe} from "../common/reactionsPipe"

@NgModule({
  declarations: [AddAnimalComponent, ListAnimalsComponent, AnimalDetailsComponent, KeysPipe],
  imports: [FormsModule, CommonModule, RouterModule],
  providers: [AnimalsService]
})

export class AnimalsModule {}
