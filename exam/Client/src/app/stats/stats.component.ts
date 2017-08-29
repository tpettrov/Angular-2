import {Component, OnInit} from '@angular/core';
import {StatsService} from "./stats.service";


@Component({
  selector: 'stats',
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
  users: 0;
  animals: 0;

  constructor(private statService: StatsService) {
  }

  ngOnInit(): void {
    this.statService.getStats().subscribe((stats) => {
      this.users = stats.users;
      this.animals = stats.animals;
    });
  }

}
