import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";
import {Router} from "@angular/router";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {Etudiant} from "../../../_Models/etudiant";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../frontcss.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  private id!: number;

  constructor(private etduiantconnecte: EtudiantConnecteService, private r: Router, private etudiantService: EtudiantService) {

  }
  E!: Etudiant;
etudiant!:Etudiant;
    id_logout =this.etduiantconnecte.getData('id');

  ngOnInit(): void {
    const etudiantId = this.etduiantconnecte.getData('id');
    if (etudiantId!= null) {
      this.etudiantService.getEtudiant(etudiantId).subscribe(value => {
        this.etudiant = value;



      });
    }


/* ---------------------------user----------------------------------------*/





  }

  logout() {
    if (this.etduiantconnecte.getData('id')!= null) {
      console.log()



      this.etudiantService.Offline(this.etduiantconnecte.getData('id')!).subscribe(value => {

      });
      this.etduiantconnecte.clearData();

      this.r.navigate(['/login']);
    }


  }

  redirect(id: number) {
    this.r.navigate(['/update_profile/' + id]);

  }


}
