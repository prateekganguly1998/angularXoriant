import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { log } from "util";
import { AppointmentService } from "../shared/appointment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-appointment",
  templateUrl: "./add-appointment.component.html",
  styleUrls: ["./add-appointment.component.css"],
})
export class AddAppointmentComponent implements OnInit {
  appointmentForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl("", [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    inlineRadioOptions: new FormControl("", [Validators.required]),
    streetName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
    ]),
    cityName: new FormControl("", [
      Validators.required,
      Validators.maxLength(20),
    ]),
    pincode: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{6}"),
    ]),
    state: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    package: new FormControl("", [Validators.required]),
    duration: new FormControl("", [Validators.required]),
    total: new FormControl(),
  });

  total = "Complete all Details";
  constructor(
    private service: AppointmentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.appointmentForm.valueChanges.subscribe((val) => {
      if (val.duration != null && val.package != null) {
        this.total = "" + val.duration * val.package;
      }
    });
  }

  onSubmit() {
    this.appointmentForm.patchValue({
      total: parseInt(this.total),
    });
    console.log(this.appointmentForm.value);
    if (this.appointmentForm.status !== "INVALID") {
      console.log(this.appointmentForm.status);
      this.toastr.success(
        "Appointment added",
        "You have successfully added an appointment"
      );
      this.service.postAppointment(this.appointmentForm.value).subscribe(() => {
        console.log(`Appointment added`);
      });
      this.appointmentForm.reset();
    } else {
      this.toastr.error("You have entered invalid data!","Fatal");
    }
    //this.service.push(this.appointmentForm.value);
  }
}
