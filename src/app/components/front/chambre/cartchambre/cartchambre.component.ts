import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Chambre} from "../../../../_Models/chambre";

@Component({
  selector: 'app-cartchambre',
  templateUrl: './cartchambre.component.html',
  styleUrls: ['./cartchambre.component.css']
})
export class CartchambreComponent {

  @Output() detailsEmitterSimple = new EventEmitter<number>();
  @Output() detailsEmitterDouble = new EventEmitter<number>();
  @Output() detailsEmitterTriple = new EventEmitter<number>();

  constructor() { }

  goToDetailsChambreSimple() {
    this.detailsEmitterSimple.emit();
  }
  goToDetailsChambreDouble() {
    this.detailsEmitterDouble.emit();
  }

  goToDetailsChambreTriple() {
    this.detailsEmitterTriple.emit();
  }


}
