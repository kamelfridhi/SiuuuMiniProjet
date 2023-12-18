import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import {Universite} from "../_Models/universite";
import {catchError, tap} from "rxjs";
import {Foyer} from "../_Models/foyer/foyer";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  readonly API_URL = "http://localhost:8081";
  readonly ENDPOINT_GETOneUV = "/api/universite/getOne";
  readonly ENDPOINT_ADDUV = "/api/universite/add";
  readonly ENDPOINT_UPDATEUV = "/api/universite/update";
  readonly ENDPOINT_DELETEUCBYID = "/api/universite/delete";
  private readonly apiUrl = 'https://graph.facebook.com';

  private readonly pageId = '101832652905293';
  private readonly accessToken = 'EABN4S3PVPwwBO8lfwyMC5jjFSY2VutSGfbK418zOxZAUoGMFL33Pfyd8PLSEGlFA4xzzheAQWnBEyibkMwp6qD4ckZBHsPOqpnhgHZAyR8UI4J2ibdOKvGT6ZBLirBEQWbTUiDve3zZBqWZAdMC0oRc0kZB0jweJnK93ff24rUs1SEzI1V2AbZBZBUNz0VPZAqH6SP54gcp6jn5KrPv53J0ndQwAcZD';
  api = 'http://localhost:8081/api/universite/'
  apiallfoyer = 'http://localhost:8081/api/foyer/all'
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
    return this.http.put<Universite>(`http://localhost:8081/api/universite/affecterFoyerAUniversite/${idFoyer}/${iduv}`, null);
    //  return this.http.post<Universite>("http://localhost:8080/api/universite/add", u, this.httpOptions);
  }
  disaffecFoyerAUniversite(idFoyer:number,iduv:number): Observable<Universite> {
    return this.http.put<Universite>(`http://localhost:8081/api/universite/desaffecterFoyerAUniversite/${idFoyer}/${iduv}`, null);
    //  return this.http.post<Universite>("http://localhost:8080/api/universite/add", u, this.httpOptions);
  }

  deleteUniversiteById(iduniversite: number): Observable<void> {
    const url = `${this.API_URL}${this.ENDPOINT_DELETEUCBYID}/${iduniversite}`;
    return this.http.delete<void>(url);
  }
  getUniversiteById(iduniversite: number): Observable<Universite> {

    return this.http.get<Universite>(`http://localhost:8081/api/universite/getOne/${iduniversite}`);

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
