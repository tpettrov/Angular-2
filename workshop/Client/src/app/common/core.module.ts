import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {RouterModule} from '@angular/router';
import {HttpService} from './http.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [HttpService]
})
export class CoreModule {}
