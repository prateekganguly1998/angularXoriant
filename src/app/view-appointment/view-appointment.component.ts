import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appList: AppointmentSemiView[]  = [
    {
      firstName: "Prateek",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 1
    },
    {
      firstName: "Prateek1",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 2
    },
    {
      firstName: "Prateek2",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 3
    },
    {
      firstName: "Prateek3",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 4
    },
    {
      firstName: "Prateek4",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 5
    },
    {
      firstName: "Prateek5",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 6,
    },
    {
      firstName: "Prateek6",
      lastName: "Ganguly",
      traineePreference: "female",
      package: 500,
      total: 500,
      duration: 5,
      id: 7
    }
  ]

  constructor(private service:DataService) {

  }

  ngOnInit(): void {
    // this.service.dataTransferObservable.subscribe((val)=> {
    //   console.log("from list" , val);
    // });
  }

}
interface AppointmentSemiView {
  firstName: string;
  lastName: string;
  traineePreference: string;
  duration: number;
  package: number;
  total: number;
  id: number;
}
