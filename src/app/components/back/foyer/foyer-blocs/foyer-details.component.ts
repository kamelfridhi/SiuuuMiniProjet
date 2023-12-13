import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from "../../../../_Services/shared.service";

import {Bloc} from "../../../../_Models/bloc/bloc";
import {Foyer} from "../../../../_Models/foyer/foyer";

@Component({
  selector: 'app-foyer-blocs',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.css']
})
export class FoyerDetailsComponent implements OnInit {

  foyer!:Foyer;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.data$.subscribe(data => {
      this.foyer = data;
    });
  }


}
