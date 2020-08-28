import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TallerDonAlexComponent } from './taller-don-alex/taller-don-alex.component';

@NgModule({
  declarations: [
    AppComponent,
    TallerDonAlexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
