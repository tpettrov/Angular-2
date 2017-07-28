import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HomeData} from './HomeData';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HomeData],
  bootstrap: [HomeComponent]
})
export class AppModule { }
