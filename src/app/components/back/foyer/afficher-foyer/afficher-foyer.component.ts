import {Component, OnInit, ViewChild} from '@angular/core';
import {FoyerService} from "../../../../_Services/foyer.service";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {RouterOutlet} from "@angular/router";
import {SharedService} from "../../../../_Services/shared.service";
import {Bloc} from "../../../../_Models/bloc/bloc";

@Component({
  selector: 'app-afficher-resto',
  templateUrl: './afficher-foyer.component.html',
  styleUrls: ['./afficher-foyer.component.css']
})
export class AfficherFoyerComponent implements OnInit {




  foyers:Foyer[]=[];
  constructor(private foyerService: FoyerService,private sharedService: SharedService) {}

  ngOnInit(): void {
    this.loadFoyers();

    // Subscribe to foyer updates
    this.foyerService.foyerUpdated.subscribe(() => {
      // Reload the list of foyers
      this.loadFoyers();
    });
  }



  deleteF(index:number,id_foyer: number) {
    this.foyerService.deleteFoyer(id_foyer).subscribe(value =>{
      this.foyers.splice(index, 1);
    });
  }


  loadFoyers() {
    this.foyerService.getAllFoyer().subscribe(data =>this.foyers=data );
  }

  goDown() {
    //scroll to bot with smooth behavior

  }


  sendDataToChild(foyer: Foyer) {

      this.sharedService.setData(foyer);
      //scroll to bot with smooth behavior
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });

  }

}

