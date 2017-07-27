import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';
import TruncatePipe from './truncate';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListComponent, DetailsComponent]
})
export class AppModule { }
