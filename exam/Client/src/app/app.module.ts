import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AnimalsRoutesModule} from './routes.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {CoreModule} from './common/core.module';
import {HttpModule} from '@angular/http';
import { MessageService } from './common/message.service';
import {StatsModule} from './stats/stats.module';
import {AnimalsModule} from "./animals/animals.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AnimalsRoutesModule,
    StatsModule,
    CoreModule,
    HttpModule,
    AnimalsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
