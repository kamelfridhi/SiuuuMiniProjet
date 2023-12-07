import {Component, OnInit} from '@angular/core';
import {Universite} from "../../../../_Models/universite";
import {FormBuilder} from "@angular/forms";
import {UniversiteService} from "../../../../_Services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updateuniversite',
  templateUrl: './updateuniversite.component.html',
  styleUrls: ['./updateuniversite.component.css']
})
export class UpdateuniversiteComponent implements OnInit {
  uv!: Universite;


  constructor(private formBuilder: FormBuilder, private uvService: UniversiteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(p=>{

      this.getuniversite(p['id'])
    })


  }



  modifieruniversite() {

    this.uvService.updateUniversite(this.uv).subscribe({
      next:(response) => {

        this.router.navigate(['/back/university/adduniversite'])
      },
      error:(error) => {
        console.error('Erreur lors de la modification de la universite', error);
      }
    });


  }




  getuniversite(id :number){
    this.uvService.getUniversiteById(id).subscribe((data:any)=>this.uv=data)

  }

}
