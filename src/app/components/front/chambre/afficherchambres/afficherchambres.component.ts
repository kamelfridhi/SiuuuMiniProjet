import {Component, OnInit} from '@angular/core';
import {ChambreService} from "../../../../_Services/chambre.service";
import {Router} from "@angular/router";
import {Chambre} from "../../../../_Models/chambre2";

@Component({
  selector: 'app-afficherchambres',
  templateUrl: './afficherchambres.component.html',
  styleUrls: ['./afficherchambres.component.css']
})
export class AfficherchambresComponent implements OnInit{
  chambres: Chambre[] = [];



  constructor(private chambreService: ChambreService,private router:Router) { }
  ngOnInit() {
    this.loadChambres();
  }

  loadChambres() {
    this.chambreService.getAllChambres().subscribe({
      next:(data) => {
        this.chambres = data;
        console.log('Chambres chargées avec succès !', this.chambres);
      },
      error:(error) => {
        console.error('Erreur lors du chargement des chambres', error);
      }
    });
  }
  getImagePath(typeChambre: string): string {
    switch (typeChambre) {
      case 'SIMPLE':
        return '../../../../../assets/images/1.png';
      case 'DOUBLE':
        return '../../../../../assets/images/2.png';
      case 'TRIPLE':
        return '../../../../../assets/images/3.png';
      default:
        return '../../../../../assets/images/1.png';
    }
  }
  goToDetailsChambre(idChambre: number) {
    // Ajoute ici la logique pour réagir à l'événement émis (par exemple, naviguer vers la page de détails).
    console.log('Clique sur détails pour la chambre avec l\'ID :', idChambre);
  }
  afficherDetailsChambreSimple() {
    console.log('Clique sur détails pour la chambre avec 1111111111  :');
    this.router.navigate(['/detailchambre/1']);
  }
  afficherDetailsChambreDouble() {
    console.log('Clique sur détails pour la chambre avec 2222222 :');
    this.router.navigate(['/detailchambre/2']);
  }
  afficherDetailsChambreTriple() {
    console.log('Clique sur détails pour la chambre avec 333333333:');
    this.router.navigate(['/detailchambre/3']);
  }


}
