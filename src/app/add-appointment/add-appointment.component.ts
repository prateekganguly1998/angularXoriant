import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {log} from "util";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  form = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    traineePref: new FormControl(),
    streetName: new FormControl(),
    cityName: new FormControl(),
    pincode: new FormControl(),
    state: new FormControl(),
    package: new FormControl(),
    duration: new FormControl()
  })

  total = "Complete all Details"
  constructor(private service:DataService) {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      if (val.duration != null && val.package != null) {
        this.total = "" + (val.duration*val.package);
      }
    })
  }

  onSubmit() {
    console.log(this.form.value);
    // this.service.push(this.form.value);
  }
}
