import { Injectable } from "@angular/core";
import { Observable, throwError, Subject } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

const headerOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AppointmentService {
  dbUrl = environment.apiUrl;

  // private dataService = new Subject<any>();
  // dataTransferObservable = this.dataService.asObservable();

  // push(data) {
  //   this.dataService.next(data);
  // }

  constructor(private http: HttpClient) {}
  postAppointment(data)
  {
    return this.http.post(`${this.dbUrl}/allfriends`,data,headerOptions).pipe(map((response:Response)=>response));
  }
  getAllAppointments() {
    return this.http
      .get(`${this.dbUrl}/allfriends`, headerOptions)
      .pipe(map((response: Response) => response));
  }
  getOneAppointment(id: number) {
    return this.http.get(`${this.dbUrl}/allfriends/${id}`).pipe(map((response:Response)=>response));
  }
  editAppointment(app){
    return this.http.patch(`${this.dbUrl}/allfriends/${app.id}`, app);
  }

}
