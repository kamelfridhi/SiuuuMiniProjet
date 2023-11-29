import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Foyer} from "../_Models/foyer/foyer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private Api="http://localhost:8081/api";

  private getAllFoyerApi= this.Api + "/foyer/all";

  constructor(private http:HttpClient) { }

  getAllFoyer() : Observable<Foyer[]>{
    return this.http.get<Foyer[]>(this.getAllFoyerApi);
  }

  deleteFoyer(id:number): Observable<void>{
    return this.http.delete<void>(`${this.Api}/foyer/delete/${id}`);
  }
}
