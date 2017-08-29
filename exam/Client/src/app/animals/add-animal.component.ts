import {Component} from "@angular/core"
import {AddAnimalModel} from "./add-animal.model"
import {AnimalsService} from "./animals.service"
import {MessageService} from "../common/message.service";
import {Router} from "@angular/router"

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html'
})

export class AddAnimalComponent {

  constructor(private animalService: AnimalsService, private msgService: MessageService, private router: Router) {
  }

  animal: AddAnimalModel = new AddAnimalModel('Other');

  addAnimal() {
    this.animalService.addAnimal(this.animal).subscribe((res) => {
      if (!res.success) {
        this.msgService.parseMessage(res);
      } else {
        this.router.navigateByUrl('animals/all');
      }
    });
  }

}

