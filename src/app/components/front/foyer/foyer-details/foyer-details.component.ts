import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {FoyerService} from "../../../../_Services/foyer.service";
import {Resto} from "../../../../_Models/resto/resto";

@Component({
  selector: 'app-foyer-details',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.css']
})
export class FoyerDetailsComponent implements OnInit{
  foyer!:Foyer;
  resto!:Resto;
  id!:number;

  constructor(private ar:ActivatedRoute,private foyerService:FoyerService) {}
  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.foyerService.getFoyerByID(this.id).subscribe(value => this.foyer=value);
    this.foyerService.getRestoOfFoyerDonner(this.id).subscribe(value => this.resto=value);

  }

}
