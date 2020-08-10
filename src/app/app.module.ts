import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAppointmentComponent,
    ViewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
