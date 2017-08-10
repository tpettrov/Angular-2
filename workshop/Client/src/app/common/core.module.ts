import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {RouterModule} from '@angular/router';
import {HttpService} from './http.service';
import {MessageHandlerComponent} from './message-handler.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, MessageHandlerComponent],
  exports: [NavbarComponent, MessageHandlerComponent],
  providers: [HttpService]
})
export class CoreModule {}
