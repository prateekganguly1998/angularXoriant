import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "../shared/appointment.service";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
  styleUrls: ["./view-appointment.component.css"],
})
export class ViewAppointmentComponent implements OnInit {
  allAppointments: any;
  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.service.getAllAppointments().subscribe((data) => {
      this.allAppointments = data;
    });
    // this.service.dataTransferObservable.subscribe((val)=> {
    //   console.log("from list" , val);
    // });
  }
}
