import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import {Universite} from "../_Models/universite";
import {catchError, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  readonly API_URL = "http://localhost:8080";
  readonly ENDPOINT_GETALLUV = "/api/universite/all";
  readonly ENDPOINT_GETOneUV = "/api/universite/getOne";
  readonly ENDPOINT_ADDUV = "/api/universite/add";
  readonly ENDPOINT_UPDATEUV = "/api/universite/update";
  readonly ENDPOINT_DELETEUCBYID = "/api/universite/delete";
  api = 'http://localhost:8080/api/universite/'
  constructor(private http: HttpClient) { }

  getAllUniversites(): Observable<Universite[]> {

    return this.http.get<Universite[]>(this.api+"all");
  }


  addUniversite(u: Universite): Observable<Universite> {
    const url = `${this.API_URL}${this.ENDPOINT_ADDUV}`;
    return this.http.post<Universite>(url, u);
  }

  updateUniversite(u: Universite): Observable<Universite> {
    const url = `${this.API_URL}${this.ENDPOINT_UPDATEUV}`;
    return this.http.post<Universite>(url, u);
  }

  deleteUniversiteById(iduniversite: number): Observable<void> {
    const url = `${this.API_URL}${this.ENDPOINT_DELETEUCBYID}/${iduniversite}`;
    return this.http.delete<void>(url);
  }
  getUniversiteById(iduniversite: number): Observable<void> {

    const url = `${this.API_URL}${this.ENDPOINT_GETOneUV}/${iduniversite}`;
    return this.http.get<void>(url);
  }
}
