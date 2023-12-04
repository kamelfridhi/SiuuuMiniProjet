import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../../_Models/etudiant";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  etudiant: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService,private etudiantConnecte: EtudiantConnecteService) {

  }

  ngOnInit(): void {
    this.getallEtudiant();

let etudiant =this.etudiantConnecte.getData('id');
  }

  getallEtudiant() {
    this.etudiantService.getAllEtudiant().subscribe(data => {
      this.etudiant = data;
      console.log(data);
    });

  }


  deleteEtudiant(idEtudiant: number) {
    this.etudiantService.deleteetudiant(idEtudiant).subscribe(data => {
      console.log(data);
      this.getallEtudiant();
    });
  }


  blocked(idEtudiant: number) {
    this.etudiantService.etudiantBlocked(idEtudiant).subscribe(data => {
      console.log(data);
      this.getallEtudiant();
    });
    }


  unbloked(idEtudiant: number) {
    this.etudiantService.etudiantdeblocked(idEtudiant).subscribe(data => {
      this.getallEtudiant();

    })

  }
}

