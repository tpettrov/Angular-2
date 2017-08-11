import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarRoutesModule} from './routes.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {CoreModule} from './common/core.module';
import {HttpModule} from '@angular/http';
import { MessageService } from './common/message.service';
import {StatsModule} from './stats/stats.module';
import {CarsModule} from "./cars/cars.module"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    CarRoutesModule,
    StatsModule,
    CoreModule,
    HttpModule,
    CarsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
