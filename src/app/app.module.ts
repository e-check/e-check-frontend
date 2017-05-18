import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInComponent } from './check-in/check-in.component';

import { CheckInService } from './check-in/check-in.service'

@NgModule({
  declarations: [
    AppComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CheckInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
