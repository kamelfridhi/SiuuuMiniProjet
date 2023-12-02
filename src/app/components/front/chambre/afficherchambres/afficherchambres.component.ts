import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../../_Models/chambre";
import {ChambreService} from "../../../../_Services/chambre.service";

@Component({
  selector: 'app-afficherchambres',
  templateUrl: './afficherchambres.component.html',
  styleUrls: ['./afficherchambres.component.css']
})
export class AfficherchambresComponent implements OnInit{
  chambres: Chambre[] = [];



  constructor(private chambreService: ChambreService) { }
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





}
