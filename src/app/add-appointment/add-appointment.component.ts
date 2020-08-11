import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {log} from "util";
import {AppointmentService} from '../shared/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointmentForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    inlineRadioOptions: new FormControl(),
    streetName: new FormControl(),
    cityName: new FormControl(),
    pincode: new FormControl(),
    state: new FormControl(),
    package: new FormControl(),
    duration: new FormControl(),
    total:new FormControl()
  })

  total = "Complete all Details"
  constructor(private service:AppointmentService) {
  }

  ngOnInit(): void {
    this.appointmentForm.valueChanges.subscribe((val) => {
      if (val.duration != null && val.package != null) {
        this.total = "" + (val.duration*val.package);
      }
    })
  }

  onSubmit() {
   
    this.appointmentForm.patchValue(
      {
        total:parseInt(this.total)
      }
    )
    console.log(this.appointmentForm.value);
    this.service.postAppointment(this.appointmentForm.value).subscribe(
      ()=>
      {
        console.log(`Appointment added`);
      }
    )
    //this.service.push(this.appointmentForm.value);
  }
}
