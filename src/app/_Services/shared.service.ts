import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  public setData(data: any): void {
    //console.log("data$ : "+this.data$.forEach(value  => console.log(value)));
    this.dataSubject.next(data);
  }
  constructor() { }
}
