import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EtudiantService} from "../../../../_Services/etudiant.service";
import {Etudiant} from "../../../../_Models/etudiant";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  etudiant!:Etudiant;
  constructor(private route:ActivatedRoute,private router:Router,private etudiantservice:EtudiantService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.getEtudiant(params['id']);

    })
  }


  getEtudiant(id:number){
    this.etudiantservice.getEtudiant(id.toString()).subscribe(data=>{
      this.etudiant=data;
    })
  }


  updateEtudiant() {
    this.etudiantservice.updateEtudiant(this.etudiant).subscribe(data => {
      this.router.navigate(['back/admin/user'])
    })
  }
}
