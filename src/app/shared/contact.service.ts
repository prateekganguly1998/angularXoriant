import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, throwError, Subject } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

const headerOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class ContactService {
  dbUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  postContact(data) {
    return this.http
      .post(`${this.dbUrl}/contactInfo`, data, headerOptions)
      .pipe(map((response: Response) => response));
  }
  getAllContacts() {
    return this.http
      .get(`${this.dbUrl}/contactInfo`, headerOptions)
      .pipe(map((response: Response) => response));
  }
  deleteContact(id)
  {
    return this.http.delete(`${this.dbUrl}/contactInfo/${id}`,headerOptions);
  }
}
