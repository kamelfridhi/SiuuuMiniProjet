import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Foyer} from "../../_Models/foyer/foyer";
import {HttpClient} from "@angular/common/http";
import {Resto} from "../../_Models/resto/resto";

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  restoUpdated = new EventEmitter<void>();

  announceRestoUpdate() {
    this.restoUpdated.emit();
  }

  private Api="http://localhost:8081/api";

  private getAllRestoEndPoint= this.Api + "/resto/all";

  private getOneRestoApi= this.Api + "/resto/getOne/";

  constructor(private http:HttpClient) { }

  getAllResto() : Observable<Resto[]>{
    return this.http.get<Resto[]>(this.getAllRestoEndPoint);
  }



  getRestoById(id:number): Observable<Resto>{
    return this.http.get<Resto>(this.getOneRestoApi+id);
  }

  deleteResto(id:number): Observable<void>{
    return this.http.delete<void>(`${this.Api}/resto/delete/${id}`);
  }

  updateFoyer(r: Resto): Observable<Resto> {
    return this.http.post<Resto>(`${this.Api}/resto/update`, r);
  }

  ajouterRestoEtAffecterAplusiersFoyer(restaurant: Resto, idFoyers: number[]): Observable<Resto> {
    const url = `${this.Api}/resto/ajouterRestoEtAffecterAplusiersFoyer`;
    return this.http.post<Resto>(url, restaurant, { params: { foyers: idFoyers} });
  }

}
