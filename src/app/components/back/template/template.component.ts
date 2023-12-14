import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";
import {EtudiantService} from "../../../_Services/etudiant.service";
import {Etudiant} from "../../../_Models/etudiant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css',"../backcss.css"],
  encapsulation:ViewEncapsulation.None
})
export class TemplateComponent implements OnInit{
 constructor(private etudiantConnecter:EtudiantConnecteService, private etudiantservice:EtudiantService,private r:Router) {
 }
etudiant:Etudiant;
  ngOnInit(): void {


    const etudiantId = this.etudiantConnecter.getData('id');
    if (etudiantId!= null) {
      this.etudiantservice.getEtudiant(etudiantId).subscribe(value => {
        this.etudiant = value;



      });
    }
  }


  logout() {
    if (this.etudiantConnecter.getData('id')!= null) {
      console.log()



      this.etudiantservice.Offline(this.etudiantConnecter.getData('id')!).subscribe(value => {

      });
      this.etudiantConnecter.clearData();

      this.r.navigate(['/login']);
    }


  }




}
