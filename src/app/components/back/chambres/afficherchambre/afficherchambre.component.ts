import {Component, OnInit} from '@angular/core';
import { ChambreService } from '../../../../_Services/chambre.service';
import { BlocService } from '../../../../_Services/bloc/bloc.service';
import {Chambre} from "../../../../_Models/chambre";
import {Bloc} from "../../../../_Models/bloc";
@Component({
  selector: 'app-afficherchambre',
  templateUrl: './afficherchambre.component.html',
  styleUrls: ['./afficherchambre.component.css']
})
export class AfficherchambreComponent implements OnInit{
  chambres: Chambre[] = [];
  blocs:Bloc[]=[];
  afficherModal = false;
  nomBloc:String="";

  chambreSelectionnee: Chambre | undefined;
  constructor(private chambreService: ChambreService,private blocService:BlocService) { }

  ngOnInit() {
    this.loadChambres();
    this.loadBlocs();

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
  loadBlocs(): void {
    this.blocService.getAllBlocs().subscribe({
      next: (blocs: Bloc[]) => {
        this.blocs = blocs;
        console.log("qsjdflmkhjsqmkfhjqsddikmf",this.blocs);
      },
      error: (error) => {
        console.error('Error fetching blocs:', error);
      }
    });
  }
  getChambresParNomBloc():void{
    this.chambreService.getChambresParNomBloc(this.nomBloc).subscribe(
      (response) => {
        console.log('Chambre supprimée avec succès !', response);
        this.chambres=response;
      },
      (error) => {
        console.error('Erreur lors de la suppression de la chambre', error);
      }
    );

  }
 inputchange(event:any){
    this.nomBloc=event.target.value;
    if(this.nomBloc==""){
      this.loadChambres()
    }
    else{
      this.getChambresParNomBloc();
    }
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
