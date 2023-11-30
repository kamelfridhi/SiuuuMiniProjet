import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Foyer} from "../../_Models/foyer/foyer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private Api="http://localhost:8081/api";

  private getAllFoyerApi= this.Api + "/foyer/all";
  private getOneFoyerApi= this.Api + "/foyer/getOne/";

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getAllFoyer() : Observable<Foyer[]>{
    return this.http.get<Foyer[]>(this.getAllFoyerApi);
  }

  getFoyerByID(id:number): Observable<Foyer>{
    return this.http.get<Foyer>(this.getOneFoyerApi+id);
  }

  deleteFoyer(id:number): Observable<void>{
    return this.http.delete<void>(`${this.Api}/foyer/delete/${id}`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.Api}/foyer/add`, foyer, this.httpOptions);
  }
  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.Api}/foyer/update`, foyer, this.httpOptions);
  }

}