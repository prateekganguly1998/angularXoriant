import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}
