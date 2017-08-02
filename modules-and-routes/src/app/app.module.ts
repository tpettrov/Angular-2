import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes/routes.module';
import { AppComponent } from './app.component';
import {CarsModule} from '../cars/cars.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    CarsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
