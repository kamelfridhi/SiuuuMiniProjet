import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Universite} from "../../../../_Models/universite";

@Component({
  selector: 'app-card-unvi',
  templateUrl: './card-unvi.component.html',
  styleUrls: ['./card-unvi.component.css']
})
export class CardUnviComponent {
@Input() uchild!: Universite;
@Output() detail=new EventEmitter<any>();

goTodetail(id: number) {
  this.detail.emit(id);
}

}
