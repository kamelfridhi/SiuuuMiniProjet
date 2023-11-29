import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ChambreService } from '../../../../_Services/chambre.service';
import {Chambre} from "../../../../_Models/chambre";
import {TypeChambre} from "../../../../_Models/TypeChambre.enum";

@Component({
  selector: 'app-ajouterchambre',
  templateUrl: './ajouterchambre.component.html',
  styleUrls: ['./ajouterchambre.component.css']
})
export class AjouterchambreComponent implements OnInit {

  chambre!:Chambre;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService) { }

  ngOnInit() {

  }

  ajouterChambre(ajoutForm : NgForm) {
    console.log(ajoutForm.valid);
    console.log(ajoutForm)
    if (ajoutForm.valid) {
      this.chambre =ajoutForm.value;
      console.log(this.chambre );
      // Appelle le service pour ajouter la chambre
      this.chambreService.addChambre(this.chambre).subscribe(
        (response) => {
          console.log('Chambre ajoutée avec succès !', response);
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la chambre', error);
        }
      );
    }
  }
}
