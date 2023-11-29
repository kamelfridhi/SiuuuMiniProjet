import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chambre} from "../_Models/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  apiUrl = "http://localhost:8081/api/chambre";


  constructor(private http: HttpClient) { }
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.apiUrl+'/all');
  }
  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apiUrl +'/add', chambre);
  }

  updateChambre(chambreId: Number, chambreData: Chambre): Observable<Chambre> {
    const url = `${this.apiUrl}/update/${chambreId}`;
    return this.http.put<Chambre>(url, chambreData);
  }

}
