import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReservationService} from "../../../../../_Services/reservation.service";
import {EtatReservation} from "../../../../../_Models/reservation";

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent {
  @Input() etatc : EtatReservation;
  @Output() calculEmitter = new EventEmitter<Number>();
constructor(private reservationservice:ReservationService) {}
  calculerEmit(){
    this.reservationservice.getReservationFilter(null,this.etatc,null,0,100).subscribe(
      (data) => {
        this.calculEmitter.emit(data.content.length);
      }
    );
  }

}
