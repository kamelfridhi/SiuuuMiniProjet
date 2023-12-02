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
  afficherModal = false;

  chambreSelectionnee: Chambre | undefined;
  constructor(private chambreService: ChambreService) { }

  ngOnInit() {
    this.loadChambres();
  }

  loadChambres() {
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
    this.chambreService.deleteChambre(chambreId).subscribe(
      (response) => {
        console.log('Chambre supprimée avec succès !', response);
        this.loadChambres();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la chambre', error);
      }
    );
  }
  afficherDetailsChambre(chambre: Chambre) {
    this.chambreSelectionnee = chambre;
    this.afficherModal = true;
  }

  fermerModal() {
    this.afficherModal = false;
  }

}
