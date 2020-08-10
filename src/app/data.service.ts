import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataService = new Subject<any>();
  dataTransferObservable = this.dataService.asObservable();

  push(data) {
    this.dataService.next(data);
  }

  constructor() { }
}
