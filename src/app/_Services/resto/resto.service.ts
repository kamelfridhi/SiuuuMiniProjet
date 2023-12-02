import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Foyer} from "../../_Models/foyer/foyer";
import {HttpClient} from "@angular/common/http";
import {Resto} from "../../_Models/resto/resto";

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private Api="http://localhost:8081/api";

  private getAllRestoEndPoint= this.Api + "/resto/all";
  constructor(private http:HttpClient) { }

  getAllResto() : Observable<Resto[]>{
    return this.http.get<Resto[]>(this.getAllRestoEndPoint);
  }

}
