import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { log } from "util";
import { AppointmentService } from "../shared/appointment.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-edit-appointment",
  templateUrl: "./edit-appointment.component.html",
  styleUrls: ["./edit-appointment.component.css"],
})
export class EditAppointmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: AppointmentService,
    private toastr: ToastrService
  ) {}
  id: number;
  total = null;
  actualData: any = null;
  editForm = new FormGroup({
    id: new FormControl(),
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
    package: new FormControl("", [Validators.required]),
    duration: new FormControl("", [Validators.required]),
    total: new FormControl(),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.service.getOneAppointment(+this.id).subscribe((data) => {
      this.actualData = data;
      delete this.actualData["streetName"];
      delete this.actualData["pincode"];
      delete this.actualData["cityName"];
      delete this.actualData["state"];
      this.editForm.setValue(this.actualData);

      this.editForm.valueChanges.subscribe((val) => {
        if (val.duration != null && val.package != null) {
          this.total = "" + val.duration * val.package;
        }
      });
    });
  }

  onSubmit() {
    this.editForm.patchValue({
      total: parseInt(this.total),
    });
    console.log(this.editForm);
    if (this.editForm.status !== "INVALID") {
      this.toastr.success(
        "Appointment edited",
        "You have successfully edited an appointment"
      );
      this.service.editAppointment(this.editForm.value).subscribe(() => {
        console.log(`Appointment edited`);
      });
    } else {
      this.toastr.error("You have entered invalid data!", "Fatal");
    }
  }
}
