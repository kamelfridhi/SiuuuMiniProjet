import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Foyer} from "../../../../_Models/foyer/foyer";

@Component({
  selector: 'app-card-foyer',
  templateUrl: './card-foyer.component.html',
  styleUrls: ['./card-foyer.component.css']
})
export class CardFoyerComponent {
  @Input() foyer!:Foyer;
  @Output() detailsEmitter = new EventEmitter();


  goToDetailsPage(idFoyer: number) {
      this.detailsEmitter.emit(idFoyer);
  }

}
