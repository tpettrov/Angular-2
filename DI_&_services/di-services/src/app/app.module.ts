import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Data} from './Data';

import { HomeComponent } from './home.component';
import {FollowersComponent} from './followers/followers.component';
import {ReposContainerComponent} from './repos/reposContainer.component';
import {SingleRepoComponent} from './repos/repo.component';

@NgModule({
  declarations: [
    HomeComponent,
    FollowersComponent,
    ReposContainerComponent,
    SingleRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Data],
  bootstrap: [HomeComponent, FollowersComponent, ReposContainerComponent]
})
export class AppModule { }
