import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutesModule} from '../routes.module'
import {CarsHomeComponent} from '../cars/carshome.component'
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
