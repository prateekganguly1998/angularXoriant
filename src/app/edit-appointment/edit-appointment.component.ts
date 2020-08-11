import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { log } from "util";
import { AppointmentService } from "../shared/appointment.service";

@Component({
  selector: "app-edit-appointment",
  templateUrl: "./edit-appointment.component.html",
  styleUrls: ["./edit-appointment.component.css"],
})
export class EditAppointmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: AppointmentService
  ) {}
  id: number;
  total = null;
  actualData: any = null;
  editForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    date: new FormControl(),
    inlineRadioOptions: new FormControl(),
    package: new FormControl(),
    duration: new FormControl(),
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
      console.log(data);
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
    this.service.editAppointment(this.editForm.value).subscribe(() => {
      console.log(`Appointment edited`);
    });
  }
}
