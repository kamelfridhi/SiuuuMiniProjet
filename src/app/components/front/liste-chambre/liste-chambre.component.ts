import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ChambresPage } from 'src/app/_Models/chambre2';
import { ReservationService } from 'src/app/_Services/reservation.service';

@Component({
  selector: 'app-liste-chambre',
  templateUrl: './liste-chambre.component.html',
  styleUrls: ['./liste-chambre.component.css','../frontcss.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ListeChambreComponent implements OnInit {
  chambrepage!: ChambresPage;
  nom: string | null =null
  nomBloc: string | null =null
  idFoyer: number | null =null
  page: number=0 
  size: number=6

  constructor(private reservationservice: ReservationService, private router:Router) {}
  

  ngOnInit(): void {
    this.getChambres()
  }

  getChambres(){
    this.reservationservice.getChambreFilter(this.nom,this.nomBloc,this.idFoyer,this.page,this.size).subscribe((result)=>{
      this.chambrepage=result
     console.log( this.chambrepage)
    })
  }

  nextPage() {
    if (!this.chambrepage?.last) {
      this.page++;
      this.getChambres();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.getChambres();
    }
  }

  counter() {
    return new Array(this.chambrepage?.totalPages);
  }

  GetPage(pageNumber: number) {
    this.page = pageNumber;
    this.getChambres();
  }

  reserver(id:Number){
    this.router.navigate(['/Reserver/'+id]);
    }

}
