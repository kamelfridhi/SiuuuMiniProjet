import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environnment';
import { Observable } from 'rxjs';
import { EtatReservation, Reservation, ReservationsDTOPage } from '../_Models/reservation';
import {  Chambre, ChambresPage } from '../_Models/chambre2';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  private apiUrl = environment.base_Url;

  constructor(private http: HttpClient) {}

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation/ALLReservation`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservation/addReservation`, reservation);
  }

  deleteReservation(id: Number,cin:Number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservation/deleteReservation/${id}/${cin}`);
  }
  updateReservation(id: Number, etat: string): Observable<Reservation> {
    let params = new HttpParams()
      .set('id', id.toString())
      .set('etat', etat);

    const options = { params };

    return this.http.post<Reservation>(`${this.apiUrl}/reservation/UpdateReservation`, {}, options);
  }

  assignReservationToRoomAndStudent(reservation: Reservation, numChambre: number, idEtudiant: number): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.apiUrl}/reservation/ajouterReservationEtAssignerAChambreEtAEtudiant/${numChambre}/${idEtudiant}`,
      reservation
    );
  }

  getReservationByAcademicYear(debutAnnee: Date, finAnnee: Date): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/reservation/getReservationParAnneeUniversitaire/${debutAnnee}/${finAnnee}`);
  }

  assignChambre(id: number, cin: Number,reservation:Reservation): Observable<Reservation> {
    reservation.etat=EtatReservation.EN_ATTENTE
    return this.http.post<Reservation>(`${this.apiUrl}/reservation/affecterChambre/${id}/${cin}`, reservation);
  }

  cancelReservation(cinEtudiant: number): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.apiUrl}/reservation/annulerReservation/${cinEtudiant}`);
  }

  getReservationByCin(id:Number,cin: Number): Observable<any> {
    const url = `${this.apiUrl}/reservation/getReservationByCin/${id}/${cin}`;
    return this.http.get(url);
  }

  getReservationFilter(numReservation: string | null, etat: EtatReservation | null, cinEtudiant: number | null, page: number, size: number): Observable<ReservationsDTOPage> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('numReservation', numReservation?.trim() || '');

    params = etat !== null ? params.set('etat', etat.toString()) : params;
    params = cinEtudiant !== null ? params.set('cinEtudiant', cinEtudiant.toString()) : params;

    return this.http.get<ReservationsDTOPage>(`${this.apiUrl}/reservation/getReservationFilter`, { params });
  }

  //////// chambre ////////////

  getChambreFilter(nom: string | null, nomBloc: string | null, idFoyer: number | null, page: number, size: number): Observable<ChambresPage> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('nom', nom?.trim() || '')
      .set('nomBloc', nomBloc?.trim() || '');
      params = idFoyer !== null ? params.set('idFoyer', idFoyer.toString()) : params;

    return this.http.get<ChambresPage>(`${this.apiUrl}/chambre/GetChambreFilter`, { params });
  }

  getChambreById(id: Number): Observable<Chambre> {
    const url = `${this.apiUrl}/chambre/GetChambreById/${id}`;
    return this.http.get<Chambre>(url);
  }


}
