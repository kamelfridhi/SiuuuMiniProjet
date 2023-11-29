import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ChambreService } from '../../../../_Services/chambre.service';
import {Chambre} from "../../../../_Models/chambre";

@Component({
  selector: 'app-modifierchambre',
  templateUrl: './modifierchambre.component.html',
  styleUrls: ['./modifierchambre.component.css']
})
export class ModifierchambreComponent implements OnInit {
  modificationForm!: FormGroup;
  chambres: Chambre[] = [];
  selectedChambre: Chambre | null = null;

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService) { }

  ngOnInit() {
    this.initForm();
    this.loadChambres();
  }

  initForm() {
    this.modificationForm = this.formBuilder.group({
      idChambre: ['', Validators.required],
      numeroChambre: ['', Validators.required],
      typeC: ['', Validators.required],
      // ... autres champs du formulaire ...
    });
  }

  loadChambres() {
    // Appelle le service pour récupérer toutes les chambres
    this.chambreService.getAllChambres().subscribe(
      (data) => {
        this.chambres = data;
        console.log('Chambres chargées avec succès !', this.chambres);
      },
      (error) => {
        console.error('Erreur lors du chargement des chambres', error);
      }
    );
  }

  selectChambre(chambre: Chambre) {
    // Met à jour le formulaire avec les détails de la chambre sélectionnée
    this.selectedChambre = chambre;
    this.modificationForm.patchValue({
      idChambre: chambre.idChambre,
      numeroChambre: chambre.numeroChambre,
      typeC: chambre.typeC,
      // ... autres champs du formulaire ...
    });
  }

  modifierChambre() {
    if (this.modificationForm.valid && this.selectedChambre) {
      const chambreData = this.modificationForm.value;

      // Appelle le service pour modifier la chambre
      this.chambreService.updateChambre(this.selectedChambre.idChambre, chambreData).subscribe(
        (response) => {
          console.log('Chambre modifiée avec succès !', response);
          // Ajoute ici des actions supplémentaires si nécessaire (par exemple, redirection)
        },
        (error) => {
          console.error('Erreur lors de la modification de la chambre', error);
        }
      );

    }


  }}
