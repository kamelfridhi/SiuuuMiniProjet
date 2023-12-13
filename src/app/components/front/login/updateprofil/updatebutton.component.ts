import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Etudiant} from "../../../../_Models/etudiant";
import {EtudiantConnecteService} from "../../../../_Services/etudiant-connecte.service";
import {Router} from "@angular/router";
import {EtudiantService} from "../../../../_Services/etudiant.service";

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updatebutton.component.html',
  styleUrls: ['./updatebutton.component.css']
})
export class UpdatebuttonComponent implements OnInit {
  constructor(private etduiantconnecte: EtudiantConnecteService, private etudiantService: EtudiantService) {
  }
  ngOnInit(): void {
    const etudiantId = this.etduiantconnecte.getData('id');
    if (etudiantId != null) {
      this.etudiantService.getEtudiant(etudiantId).subscribe(value => {
        this.etudiantLogin = value;


      });
    }

  }
  etudiantLogin!: Etudiant;
  @Output() detailsEmitter = new EventEmitter();


  goToDetailsPage(idetudiant: number) {
    console.log(idetudiant);
    this.detailsEmitter.emit(idetudiant);

  }


}
