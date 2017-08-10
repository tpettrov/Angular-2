import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CarRoutesModule} from './routes.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import {CoreModule} from './common/core.module';
import {HttpModule} from '@angular/http';
import { MessageService } from './common/message.service';


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
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
