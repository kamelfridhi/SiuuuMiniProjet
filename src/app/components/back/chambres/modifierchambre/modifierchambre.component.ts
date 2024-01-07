import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ChambreService } from '../../../../_Services/chambre.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Chambre} from "../../../../_Models/chambre2";

@Component({
  selector: 'app-modifierchambre',
  templateUrl: './modifierchambre.component.html',
  styleUrls: ['./modifierchambre.component.css']
})
export class ModifierchambreComponent implements OnInit {
  chambre!: Chambre;
  modifForm!:FormGroup;


  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(p=>{

      this.getChambre(p['id'])
    })


  }



  modifierChambre() {

      this.chambreService.updateChambre(this.chambre).subscribe({
        next:(response) => {


        this.router.navigate(['/back/afficherchambre'])
        },
        error:(error) => {
          console.error('Erreur lors de la modification de la chambre', error);
        }
      });


    }




  getChambre(id :Number){
    this.chambreService.getChambre(id).subscribe((data)=>{

      this.chambre=data


    })

  }









}
