import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import {EditAppointmentComponent} from "./edit-appointment/edit-appointment.component";

const routes: Routes = [
  { path: "", redirectTo: "/home" , pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "addApp", component: AddAppointmentComponent },
  { path: "viewApp", component: ViewAppointmentComponent },
  { path: "editapp/:id", component: EditAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
