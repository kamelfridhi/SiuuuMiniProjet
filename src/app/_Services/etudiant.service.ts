import { Injectable } from '@angular/core';
import {Etudiant} from "../_Models/etudiant";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
private APIURL = "http://localhost:6060/API/Springboot/Etudiant/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addetudiant(etudiant: Etudiant): Observable<Etudiant> {
return this.http.post<Etudiant>(this.APIURL + "AddEtudiantapi", etudiant, this.httpOptions);
  }
}
