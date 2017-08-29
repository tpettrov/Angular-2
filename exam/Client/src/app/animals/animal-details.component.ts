import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AnimalsService} from "./animals.service";
import {MessageService} from "../common/message.service";

@Component({
  selector: 'animal-details',
  templateUrl: './animal-details.component.html'
})

export class AnimalDetailsComponent implements OnInit {

  animal: object;
  id: number = 0;
  curReaction: string = '';
  curComment: string;
  comments: Array<object>;
  reactions: Object;

  constructor(private activatedRoute: ActivatedRoute,
              private animalService: AnimalsService,
              private msgSrv: MessageService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
        const id = params['id'];
        this.animalService.getAnimalbyId(id).subscribe((animal) => {
          this.animal = animal;
          this.id = animal.id;
          this.reactions = animal.reactions;
          this.animalService.getComments(id).subscribe((comments) => {
            this.comments = comments;
          });
        });
      });
  }

  addReaction() {
    this.animalService.reactToAnimal(this.id, this.curReaction).subscribe((res) => {
      if (res.success) {
        this.reactions[this.curReaction]++;
        this.msgSrv.sendMessage(res.message);
      } else {
        this.msgSrv.sendMessage(`You have already reacted with ${this.curReaction}!`);
      }
    });
  }

  addComment() {
    this.animalService.commentToAnimal(this.id, this.curComment).subscribe((res) => {
      if (res.success) {
        this.comments.push(res.comment);
        this.msgSrv.sendMessage(res.message);
      } else {
        this.msgSrv.sendMessage(res.message);

      }
    });
  }
}
