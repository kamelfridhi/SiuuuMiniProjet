import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Foyer} from "../_Models/foyer/foyer";
import {Observable} from "rxjs";
import {Resto} from "../_Models/resto/resto";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  foyerUpdated = new EventEmitter<void>();

  announceFoyerUpdate() {
    this.foyerUpdated.emit();
  }

  private Api="http://localhost:8081/api";

  private getAllFoyerApi= this.Api + "/foyer/all";
  private getAllFoyerWPApi= this.Api + "/foyer/allWP";
  private getOneFoyerApi= this.Api + "/foyer/getOne/";
  private ajouterFoyerEtAffecterARestoApi = this.Api + "/foyer/ajouterFoyerEtAffecterAResto";


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

  getRestoOfFoyerDonner(idFoyer:number): Observable<Resto>{
    return this.http.get<Resto>(this.Api+"/resto/getRestoOfFoyerDonner/"+idFoyer);
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

  ajouterFoyerEtAffecterAResto(foyer: Foyer, idResto: number): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.ajouterFoyerEtAffecterARestoApi}?idResto=${idResto}`, foyer, this.httpOptions);
  }

  desaffecterFoyerAResto(idFoyer:number, idResto: number) :Observable<Foyer> {
    const url = `${this.Api}/foyer/desaffecterFoyerAResto/${idResto}/${idFoyer}`;
    return this.http.put<Foyer>(url,null);
  }

  getAllFoyerWP(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(this.getAllFoyerWPApi, { params });
  }

}
