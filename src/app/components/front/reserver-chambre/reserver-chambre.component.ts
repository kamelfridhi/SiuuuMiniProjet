import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre, ChambresPage } from 'src/app/_Models/chambre2';
import { EtatReservation, Reservation, TypePayment, TypeRepat } from 'src/app/_Models/reservation';
import { ReservationService } from 'src/app/_Services/reservation.service';

@Component({
  selector: 'app-reserver-chambre',
  templateUrl: './reserver-chambre.component.html',
  styleUrls: ['./reserver-chambre.component.css','../frontcss.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ReserverChambreComponent implements OnInit {
  reservation:Reservation= new Reservation("","","",null,"",EtatReservation.NEW,"","",null)
  chambre:Chambre
  show:boolean=false
  disabled:boolean=false


  constructor(private reservationservice: ReservationService, private router:Router,private route:ActivatedRoute) {}
  

  ngOnInit(): void {
    
    this.route.params.subscribe(p=>{
      this.getChambre(p['id'])
     
    })
  }

  ajouterReservation(){
      this.reservationservice.assignChambre(this.chambre.idChambre,14504445,this.reservation).subscribe((data)=>{
      },(err:any)=>{

      })
    
    
  }

  getReservationByCin(){
    this.reservationservice.getReservationByCin(this.chambre.idChambre,14504445).subscribe((result)=>{
      if( !result){
        this.disabled=true
      }
      if(result){
        this.reservation=result
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
    this.reservationservice.deleteReservation(this.reservation.idReservation,14504445).subscribe((data)=>{
      this.reservation=new Reservation("","","",null,"",EtatReservation.NEW,"","",null)
    },(err:any)=>{

    })
  }

}
