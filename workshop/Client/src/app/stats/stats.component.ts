import {Component, OnInit} from '@angular/core';
import {StatsService} from "./stats.service";


@Component({
  selector: 'stats',
  templateUrl: './stats.component.html'
})

export class StatsComponent implements OnInit {
  cars: 0;
  users: 0;

  constructor(private statService: StatsService) {
  }

  ngOnInit(): void {
    this.statService.getStats().subscribe((stats) => {
      this.cars = stats.cars;
      this.users = stats.users;
    });
  }

}
