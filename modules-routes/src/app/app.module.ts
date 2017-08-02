import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes.module'
import {CarsHome} from '../cars/carsHome.component'
import { AppComponent } from './app.component';
import {Data} from './Data'


@NgModule({
  declarations: [
    AppComponent,
    CarsHome
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
