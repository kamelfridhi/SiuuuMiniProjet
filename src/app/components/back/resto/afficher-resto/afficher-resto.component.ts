import {Component, OnInit, ViewChild} from '@angular/core';
import {FoyerService} from "../../../../_Services/foyer.service";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {RouterOutlet} from "@angular/router";
import {SharedService} from "../../../../_Services/shared.service";
import {Bloc} from "../../../../_Models/bloc/bloc";
import {Resto} from "../../../../_Models/resto/resto";
import {RestoService} from "../../../../_Services/resto/resto.service";

@Component({
  selector: 'app-afficher-resto',
  templateUrl: './afficher-resto.component.html',
  styleUrls: ['./afficher-resto.component.css']
})
export class AfficherRestoComponent implements OnInit {




  resto:Resto[]=[];
  constructor(private foyerService: FoyerService,private restoService:RestoService, private sharedService: SharedService) {}



  deleteR(index:number,idResto: number) {
    this.restoService.deleteResto(idResto).subscribe(value =>{
      this.resto.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.loadResto();
    // Subscribe to foyer updates
    this.restoService.restoUpdated.subscribe(() => {
      // Reload the list of foyers
      this.loadResto();
    });
  }

  loadResto() {
    this.restoService.getAllResto().subscribe(data =>this.resto=data );
  }

  goDown() {
    //scroll to bot with smooth behavior

  }


  sendDataToChild(r: Resto) {

      this.sharedService.setData(r);
      //scroll to bot with smooth behavior
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });

  }

}

