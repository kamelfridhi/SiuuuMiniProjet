import { Component } from '@angular/core';
import {FoyerService} from "../../../../_Services/foyer.service";
import {Foyer} from "../../../../_Models/foyer/foyer";

@Component({
  selector: 'app-afficher-foyer',
  templateUrl: './afficher-foyer.component.html',
  styleUrls: ['./afficher-foyer.component.css']
})
export class AfficherFoyerComponent {
  foyers:Foyer[]=[];
  constructor(private foyerService: FoyerService) {
      this.foyerService.getAllFoyer().subscribe(data =>this.foyers=data );
  }

  editF(f: Foyer) {

  }

  deleteF(index:number,id_foyer: number) {
    this.foyerService.deleteFoyer(id_foyer).subscribe(value =>{
      this.foyers.splice(index, 1);
    });
  }
}

