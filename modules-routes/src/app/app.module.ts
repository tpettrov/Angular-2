import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes.module'
import {CarsHome} from '../cars/carsHome.component'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsHome
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
