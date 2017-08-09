import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';
import {AppRoutesModule} from '../routes/routes.module';
import {CarsHomeComponent} from './carshome.component';
import {DataCars} from '../app/data_cars';
import {CarsActions} from './cars.actions';
import { IAppState } from '../store/IAppState';
import {store} from '../store/store';
import {CarsModule} from '../cars/cars.module';


@NgModule({
  declarations: [
    AppComponent,
    CarsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    NgReduxModule,
    CarsModule
  ],
  providers: [DataCars, CarsActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
