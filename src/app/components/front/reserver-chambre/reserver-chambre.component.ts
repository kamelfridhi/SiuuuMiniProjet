import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Chambre, ChambresPage } from 'src/app/_Models/chambre2';
import { EtatReservation, Reservation, TypePayment, TypeRepat } from 'src/app/_Models/reservation';
import { ReservationService } from 'src/app/_Services/reservation.service';
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {HOME} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-reserver-chambre',
  templateUrl: './reserver-chambre.component.html',
  styleUrls: ['./reserver-chambre.component.css','../frontcss.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ReserverChambreComponent implements OnInit {
  reservation:Reservation= new Reservation("","","",null,"",EtatReservation.NEW,"","","","",null)
  chambre:Chambre
  show:boolean=false
  disabled:boolean=false
  reservationForm: FormGroup;
  selectedYear: Date;
  yearOptions: { value: Date, option: string }[];
  CinEtudaint!:Number


  constructor(private fb: FormBuilder,private reservationservice: ReservationService, private router:Router,private route:ActivatedRoute,private etudiantconnecter:EtudiantConnecteService,private etudiantService:EtudiantService) {}


  ngOnInit(): void {

    this.etudiantService.getEtudiant(this.etudiantconnecter.getData('id')).subscribe(value =>
    this.CinEtudaint=value.cin)



    this.yearOptions = this.getYearOptions();
    // Initialiser selectedYear avec la première option si nécessaire
    this.selectedYear = this.yearOptions[0].value;
    this.route.params.subscribe(p=>{
      this.getChambre(p['id'])

    })
    this.reservationForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      phone: ['', [Validators.required,this.validateTunisianPhoneNumber.bind(this)]],
      typeRepat: ['', Validators.required],
      typePayment: ['', Validators.required],
      debuteAnneUniversite: ['', Validators.required],
      finAnneUniversite: ['', Validators.required],
      description: ['', Validators.required],
      anneeUniversitaire: ['', Validators.required],
    });

this.reservationForm.get('debuteAnneUniversite').setValidators([Validators.required, this.validateStartDate.bind(this)]);
this.reservationForm.get('finAnneUniversite').setValidators([Validators.required, this.validateEndDate.bind(this)]);




  }

  getYearOptions(): { value: Date, option: string }[] {
    const currentYear = new Date().getFullYear();
    const options: { value: Date, option: string }[] = [];
    let year = currentYear ;
    for (let i = 0; i < 2; i++) {
      year = year+i;
      const yearStart = new Date(year, 0, 1);
      const yearEnd = new Date(year + 1, 0, 1);

      options.push({
        value: yearStart,
        option: year+" ->"+` ${year + 1}`
      });

      options.push({
        value: yearEnd,
        option: year+1+" ->"+` ${year + 2}`
      });

      year = year+1;
    }

    return options;
  }


  validateTunisianPhoneNumber(control: AbstractControl): ValidationErrors | null {
    const phoneNumberRegex = /^[2-9]\d{7}$/;

    if (!control.value) {
      return null;  // Aucune erreur si la valeur est vide
    }

    if (!phoneNumberRegex.test(control.value.toString())) {
      return { invalidTunisianPhoneNumber: true };
    }

    return null;  // Aucune erreur
  }

  validateStartDate(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate.getTime() < currentDate.getTime() + 10 * 24 * 60 * 60 * 1000) {
      console.log("true")
      return { invalidStartDate: true };
    }
    console.log("false")
    return null;
  }

  validateEndDate(control) {
    const startDate = new Date(this.reservationForm.get('debuteAnneUniversite').value);
    const endDate = new Date(control.value);
    if (endDate.getTime() < startDate.getTime() + 30 * 24 * 60 * 60 * 1000) {
      return { invalidEndDate: true };
    }

    return null;
  }

  ajouterReservation(){
    if(this.reservationForm.valid){
      this.reservation= this.reservationForm.value
      this.reservationservice.assignChambre(this.chambre.idChambre,this.CinEtudaint,this.reservation).subscribe((data)=>{
        if(data){
          this.reservation=data
          this.disabled=false
        }
      },(err:any)=>{

      })

    }


  }

  getReservationByCin(){
    this.reservationservice.getReservationByCin(this.chambre.idChambre,this.CinEtudaint).subscribe((result)=>{
      if( !result){
        this.disabled=true
      }
      if(result){
        this.reservation=result
        this.reservationForm.patchValue({
          email: this.reservation.email,
          phone: this.reservation.phone,
          typeRepat:  this.reservation.typeRepat,
          typePayment:  this.reservation.typePayment,
          debuteAnneUniversite: this.reservation.debuteAnneUniversite,
          finAnneUniversite:  this.reservation.finAnneUniversite,
          description:  this.reservation.description,
        });
        if(this.reservation.etat!=EtatReservation.EN_ATTENTE ){
          this.disabled=true
        }
      }

    },(err:any)=>{
      this.show=true
    })
  }

  getChambre(id:Number){
    console.log(id)
    this.reservationservice.getChambreById(id).subscribe((data)=>{
      this.chambre=data
      this.getReservationByCin()
    },(err:any)=>{

    })
  }

  delete(){
    this.reservationservice.deleteReservation(this.reservation.idReservation,this.CinEtudaint).subscribe((data)=>{
      this.reservation=new Reservation("","","",null,"",EtatReservation.NEW,"","","","",null)
    },(err:any)=>{

    })
  }

  protected readonly HOME = HOME;
}
