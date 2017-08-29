import {NgModule} from '@angular/core';
import {StatsComponent} from './stats.component';
import {CommonModule} from '@angular/common';
import {StatsService} from "./stats.service"

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule],
  providers: [StatsService]

})
export class StatsModule {}
