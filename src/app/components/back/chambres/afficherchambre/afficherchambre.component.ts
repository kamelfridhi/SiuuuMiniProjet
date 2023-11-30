import {Component, OnInit} from '@angular/core';
import { ChambreService } from '../../../../_Services/chambre.service';
import {Chambre} from "../../../../_Models/chambre";
@Component({
  selector: 'app-afficherchambre',
  templateUrl: './afficherchambre.component.html',
  styleUrls: ['./afficherchambre.component.css']
})
export class AfficherchambreComponent implements OnInit{
  chambres: Chambre[] = [];

  constructor(private chambreService: ChambreService) { }

  ngOnInit() {
    this.loadChambres();
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

  supprimerChambre(chambreId: Number) {
    // Appelle le service pour supprimer la chambre
    this.chambreService.deleteChambre(chambreId).subscribe(
      (response) => {
        console.log('Chambre supprimée avec succès !', response);
        // Ajoute ici des actions supplémentaires si nécessaire (par exemple, recharger la liste)
        // Par exemple, recharge la liste après la suppression
        this.loadChambres();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la chambre', error);
      }
    );
  }


}
