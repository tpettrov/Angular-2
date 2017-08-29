import {Component, OnInit} from "@angular/core";
import {AnimalsService} from "../animals/animals.service";
import {DeleteAnimalModel} from "../animals/delete-animal.model";
import {MessageService} from "../common/message.service";

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html'
})

export class ProfilePageComponent implements OnInit {
  constructor(private animalService: AnimalsService, private msgService: MessageService) {
  }

  usersAnimals: Array<DeleteAnimalModel> = [];

  ngOnInit() {
    this.animalService.getUserAnimals().subscribe((animals) => {
      this.usersAnimals = animals;
    });
  }

  deleteAnimal(id) {
    this.animalService.deleteAnimal(id).subscribe((res) => {
      if (!res.success) {
        this.msgService.parseMessage(res);
      } else {
        this.msgService.sendMessage(res.message);
        this.usersAnimals = this.usersAnimals.filter((animal) => {
          return animal.id !== id;
        });
      }
    });
  }
}
