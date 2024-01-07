import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TypeChambre} from "../_Models/TypeChambre.enum";
import {Chambre} from "../_Models/chambre2";

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

  updateChambre(chambreData: Chambre): Observable<Chambre> {
    const url = `${this.apiUrl}/update`;
    return this.http.post<Chambre>(url, chambreData);
  }
  deleteChambre(chambreId: Number): Observable<Chambre> {
    const url = `${this.apiUrl}/delete/${chambreId}`;
    return this.http.delete<Chambre>(url);
  }
  getChambre(id : Number): Observable<Chambre> {
    return this.http.get<Chambre>(this.apiUrl+'/GetChambreById/'+id);
  }

  getChambresParNomBloc(nomBloc: String): Observable<Chambre[]> {
    const url = `${this.apiUrl}/getChambresParNomBloc/${nomBloc}`;
    return this.http.get<Chambre[]>(url);
  }


  nombreChambreParTypeEtBloc(type: TypeChambre, idBloc: number): Observable<number> {
    const url = `${this.apiUrl}/getChambresParNomBloc/${type}/${idBloc}`;
    return this.http.get<number>(url);
  }

}
