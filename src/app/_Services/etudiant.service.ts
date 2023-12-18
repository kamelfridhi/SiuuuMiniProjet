import {Injectable} from '@angular/core';
import {Etudiant} from "../_Models/etudiant";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private APIURL = "http://localhost:8081/api/Etudiant/";


  constructor(private http: HttpClient) {
  }

  addetudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.APIURL + "AddEtudiant", etudiant, this.httpOptions);
  }

  loginEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.APIURL + 'login', etudiant, this.httpOptions);
  }
  getEtudiant(idString: string): Observable<Etudiant> {
    let id = parseInt(idString, 10);
    return this.http.get<Etudiant>(this.APIURL + 'one/' + id);
  }

    getAllEtudiant():Observable<Etudiant[]>{
      return this.http.get<Etudiant[]>(this.APIURL + 'Alletudiant');

    }
    deleteetudiant(id:Number):Observable<Etudiant[]> {
      return this.http.delete<Etudiant[]>(this.APIURL + 'delete/' + id);
    }
      etudiantBlocked(id:number):Observable<Etudiant[]>{
        return this.http.get<Etudiant[]>(this.APIURL + 'blocked/'+ id);
      }

      etudiantdeblocked(id:number):Observable<Etudiant[]>{
        return this.http.get<Etudiant[]>(this.APIURL + 'unblocked/'+ id);
      }

      Offline(id:String):Observable<Etudiant> {
    console.log("offline     "+id)

    return this.http.post<Etudiant>(this.APIURL + 'offline/' + id,this.httpOptions);

      }

      updateEtudiant(etdudiant :Etudiant): Observable<Etudiant> {
        return this.http.put<Etudiant>(this.APIURL + 'UpdateEtudiant', etdudiant, this.httpOptions);
      }























}
