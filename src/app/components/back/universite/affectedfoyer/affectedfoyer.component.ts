import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../../_Services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Universite} from "../../../../_Models/universite";
import {Foyer} from "../../../../_Models/foyer/foyer";

@Component({
  selector: 'app-affectedfoyer',
  templateUrl: './affectedfoyer.component.html',
  styleUrls: ['./affectedfoyer.component.css']
})
export class AffectedfoyerComponent implements OnInit {
  foyer!: Foyer[];
  uv!: Universite;

  constructor(private univservice: UniversiteService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.univservice.getAllfoyer().subscribe(value=>this.foyer=value);
    this.route.params.subscribe(p=>{

      this.getuniversite(p['id'])
    })
  }
  getuniversite(id :number){
    this.univservice.getUniversiteById(id).subscribe((data:any)=>this.uv=data)

  }
  affecterfoyer(idf:number) {

    this.univservice.affecterFoyerAUniversite(idf,this.uv.idUniversite).subscribe({
      next:(response) => {

        this.router.navigate(['/back/university/adduniversite'])
      },
      error:(error) => {
        console.error('Erreur lors de la modification de la universite', error);
      }
    });


  }
}
