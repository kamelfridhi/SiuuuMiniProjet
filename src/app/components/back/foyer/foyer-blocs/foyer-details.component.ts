import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SharedService} from "../../../../_Services/shared.service";

import {Bloc} from "../../../../_Models/bloc/bloc";

@Component({
  selector: 'app-foyer-blocs',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.css']
})
export class FoyerDetailsComponent implements OnInit {

  blocsFoyer:Bloc[]=[];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {

    this.sharedService.data$.forEach(data => {
      this.blocsFoyer = data;
    });
  }


}
