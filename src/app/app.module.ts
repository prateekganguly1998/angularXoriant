import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddAppointmentComponent } from "./add-appointment/add-appointment.component";
import { ViewAppointmentComponent } from "./view-appointment/view-appointment.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditAppointmentComponent } from "./edit-appointment/edit-appointment.component";
import { AppointmentService } from "./shared/appointment.service";
import { ContactService } from "./shared/contact.service";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAppointmentComponent,
    ViewAppointmentComponent,
    EditAppointmentComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot()

  ],
  providers: [AppointmentService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
