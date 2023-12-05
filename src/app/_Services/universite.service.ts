import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import {Universite} from "../_Models/universite";
import {catchError, tap} from "rxjs";
import {Foyer} from "../_Models/foyer";

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
  readonly ENDPOINT_GETOneUV = "/api/universite/getOne";
  readonly ENDPOINT_ADDUV = "/api/universite/add";
  readonly ENDPOINT_UPDATEUV = "/api/universite/update";
  readonly ENDPOINT_DELETEUCBYID = "/api/universite/delete";
  private readonly apiUrl = 'https://graph.facebook.com';

  private readonly pageId = '101832652905293';
  private readonly accessToken = 'EABN4S3PVPwwBO7F8fvmDdvzDZC3qg8Hx1FOEQUdLMO38L4Flg6Sy567Nv062VRsiqJsqS9NxeJR2LfqHBWZCkZBZCaOhUZANHK7RBIbep3XA7ba9TQEiFxvyUEl61rwsfshiLKM6OB69uvKr5CZCYZBM5PR6CO4WOdEfZBR0EjfZCtsgMSMvuZBrG7BYRGIsH4P3btUQoM0HlOZC9Ar6ZAgaBhh9vxvJ';
  api = 'http://localhost:8080/api/universite/'
  apiallfoyer = 'http://localhost:8080/api/foyer/allfoyer'
  constructor(private http: HttpClient) { }

  getAllUniversites(): Observable<Universite[]> {

    return this.http.get<Universite[]>(this.api+"all");
  }
  getAllfoyer(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.apiallfoyer);
  }


  addUniversite(u: Universite): Observable<Universite> {
    const url = `${this.API_URL}${this.ENDPOINT_ADDUV}`;
    return this.http.post<Universite>(url, u);
  }

  updateUniversite(u: Universite): Observable<Universite> {
    const url = `${this.API_URL}${this.ENDPOINT_UPDATEUV}`;
    return this.http.post<Universite>(url, u);
  }
  affecterFoyerAUniversite(idFoyer:number,iduv:number): Observable<Universite> {
    return this.http.put<Universite>(`http://localhost:8080/api/universite/affecterFoyerAUniversite/${idFoyer}/${iduv}`, null);
    //  return this.http.post<Universite>("http://localhost:8080/api/universite/add", u, this.httpOptions);
  }
  disaffecFoyerAUniversite(idFoyer:number,iduv:number): Observable<Universite> {
    return this.http.put<Universite>(`http://localhost:8080/api/universite/desaffecterFoyerAUniversite/${idFoyer}/${iduv}`, null);
    //  return this.http.post<Universite>("http://localhost:8080/api/universite/add", u, this.httpOptions);
  }

  deleteUniversiteById(iduniversite: number): Observable<void> {
    const url = `${this.API_URL}${this.ENDPOINT_DELETEUCBYID}/${iduniversite}`;
    return this.http.delete<void>(url);
  }
  getUniversiteById(iduniversite: number): Observable<void> {

    const url = `${this.API_URL}${this.ENDPOINT_GETOneUV}/${iduniversite}`;
    return this.http.get<void>(url);
  }
  postMessageToFeed(message: string, imageUrl: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${this.pageId}/photos`; // Use the 'photos' endpoint for posting photos
    const params = {
      url: imageUrl, // Add the 'url' parameter for the photo URL
      caption: message, // Use 'caption' instead of 'message' for the photo caption
      access_token: this.accessToken
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(endpoint, params, { headers: headers });
  }
  autocomplete(query: string): Observable<any> {
    const apiUrl = 'https://nominatim.openstreetmap.org/search';
    return this.http.get(apiUrl, {
      params: {
        q: query,
        format: 'json',
        limit: '5',
        countrycodes: 'Tunisia', // Replace with your country code
      }
    });
  }

}
