import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarRoutesModule} from './routes.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {CoreModule} from './common/core.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    CarRoutesModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
