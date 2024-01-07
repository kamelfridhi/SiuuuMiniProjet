import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EtatReservation, Reservation, ReservationsDTOPage} from 'src/app/_Models/reservation';
import {ReservationService} from 'src/app/_Services/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css',"../../../backcss.css"],
  encapsulation:ViewEncapsulation.None
})
export class ListReservationComponent implements OnInit {
  numReservation: string | null=null
  etat: EtatReservation | null=null
  cinEtudiant: number | null=null
  page: number=0
  size: number=2
  reservations:ReservationsDTOPage
  archive:boolean=false
  id:Number
  etatR:string
  size2: number;
  calcul:Number
  etat2:EtatReservation=EtatReservation.EN_ATTENTE
  constructor(private reservationservice:ReservationService){}
  ngOnInit(): void {
    this.getAllreservation()
    this.getReservation()
  }

  onInputChange(event: any){
    this.numReservation=event
    this.page=0
    this.getAllreservation()
  }

  onInputChange2(event: any){
    this.cinEtudiant=event
    this.page=0
    this.getAllreservation()
  }
  onSelectChange(event:any){
    this.page=0
    if(event.target.value!=""){
      this.etat=event.target.value
    }else{
      this.etat=null
    }
    this.getAllreservation()
  }
  onSelectChange2(event:any){
      this.etat2=event.target.value
  }
  getAllreservation(){
    this.reservationservice.getReservationFilter(this.numReservation,this.etat,this.cinEtudiant,this.page,this.size).subscribe((data)=>{
      this.reservations=data

    })
  }


  reservation(){
    this.reservationservice.updateReservation(this.id,this.etatR).subscribe((data)=>{
      const index = this.reservations.content.findIndex(res => res.idReservation === this.id);
      if (index !== -1) {
        this.reservations.content[index].etat=this.etatR
      }
    })
  }

  getReservation(): void {
    this.reservationservice.getAllReservations().subscribe({
      next: (data: Reservation[]) => {
        this.size2 = data.length;
        console.log(this.size2);
      },
      error: (error) => {
        console.error('Error fetching foyers:', error);
      }
    });
  }

public onOpenModal(id:Number,etat:string): void {
  this.id=id
  this.archive=etat=='REFUSE'
  this.etatR=etat
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#deleteEmployeeModal');
  container?.appendChild(button);
  button.click();
}

OpenDetails(id:Number){

}
  nextPage() {
    if (!this.reservations?.last) {
      this.page++
      this.getAllreservation()

    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--
      this.getAllreservation()
    }
  }

  counter() {
    return new Array(this.reservations.totalPages);
}
GetPage(i:number){
  this.page=i
  this.getAllreservation()
}

 calculer(calcul: Number) {
    this.calcul = calcul;
  }
}
