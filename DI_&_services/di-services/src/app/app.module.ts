import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Data} from './Data';

import { HomeComponent } from './home.component';
import {FollowersComponent} from './followers/followers.component';

@NgModule({
  declarations: [
    HomeComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Data],
  bootstrap: [HomeComponent, FollowersComponent]
})
export class AppModule { }
