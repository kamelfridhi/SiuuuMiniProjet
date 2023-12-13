import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from "../../../../_Services/shared.service";

import {Bloc} from "../../../../_Models/bloc/bloc";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {Resto} from "../../../../_Models/resto/resto";
import {FoyerService} from "../../../../_Services/foyer.service";
import {Router} from "@angular/router";
import {RestoService} from "../../../../_Services/resto/resto.service";

@Component({
  selector: 'app-foyer-blocs',
  templateUrl: './resto-details.component.html',
  styleUrls: ['./resto-details.component.css']
})
export class RestoDetailsComponent implements OnInit {

  resto!:Resto;

  constructor(private sharedService: SharedService,private foyerService :FoyerService,private restoService:RestoService,private r : Router) {}

  ngOnInit(): void {

    this.sharedService.data$.subscribe(data => {
      this.resto = data;
    });
  }


  desafecterFoyer(idFoyer: number) {
      this.foyerService.desaffecterFoyerAResto(idFoyer,this.resto?.idResto).subscribe(value => {
        this.r.navigateByUrl('/back/restaurant/table').then(value => {
            this.restoService.announceRestoUpdate();
            //scroll to top with animation
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        );
      });
  }
}
