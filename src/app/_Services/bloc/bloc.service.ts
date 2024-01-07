import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Bloc } from '../../_Models/bloc/bloc';


@Injectable({
  providedIn: 'root'
})
export class BlocService {
  readonly API_URL = "http://localhost:8081";
  readonly ENDPOINT_GETALLBLOCS = "/api/bloc/all";
  readonly ENDPOINT_ADDBLOC = "/api/bloc/add";
  readonly ENDPOINT_UPDATEBLOC = "/api/bloc/update";
  readonly ENDPOINT_DELETEBLOCBYID = "/api/bloc/delete";

  readonly ENDPOINT_AFFECTERBLOCAFOYER="/api/bloc/affecterBlocAFoyerApi"
  readonly ENDPOINT_AFFECTERLISTCHAMBREABLOC="/api/bloc/affecterChambresABloc"


  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    const url = `${this.API_URL}${this.ENDPOINT_GETALLBLOCS}`;
    return this.http.get<Bloc[]>(url);
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.API_URL}${this.ENDPOINT_ADDBLOC}`;
    return this.http.post<Bloc>(url, bloc);
  }

  updateBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.API_URL}${this.ENDPOINT_UPDATEBLOC}`;
    return this.http.post<Bloc>(url, bloc);
  }

  deleteBlocById(idBloc: number): Observable<void> {
    const url = `${this.API_URL}${this.ENDPOINT_DELETEBLOCBYID}/${idBloc}`;
    return this.http.delete<void>(url);
  }


  affecterBlocAFoyer(nomBloc: string, nomFoyer: string): Observable<Bloc> {
    const url = `${this.API_URL}${this.ENDPOINT_AFFECTERBLOCAFOYER}/${nomBloc}/${nomFoyer}`;
    return this.http.put<Bloc>(url, {});
  }

  affecterChambresABloc(numChambre: number[], bloc: string): Observable<Bloc> {
    const url = `${this.API_URL}${this.ENDPOINT_AFFECTERLISTCHAMBREABLOC}/${bloc}`;
    return this.http.put<Bloc>(url, numChambre);
  }

  getBlocDetails(blocId: string): Observable<Bloc> {
    const url = `${this.API_URL}/api/bloc/${blocId}`;
    return this.http.get<Bloc>(url);
  }

  getBlocbyName(name: string): Observable<Bloc> {
    const url = `${this.API_URL}/api/bloc/getbyNom/${name}`;
    return this.http.get<Bloc>(url);
  }

}
