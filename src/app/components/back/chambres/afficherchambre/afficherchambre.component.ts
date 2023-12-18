import {Component, OnInit} from '@angular/core';
import {ChambreService} from '../../../../_Services/chambre.service';
import {BlocService} from '../../../../_Services/bloc/bloc.service';
import {TypeChambre} from "../../../../_Models/TypeChambre.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Bloc} from "../../../../_Models/bloc/bloc";
import {Chambre} from "../../../../_Models/chambre2";


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
  nbChambre!:number;
  selectedType!: TypeChambre;
  selectedBlocId!: number;
  ChambreForm!:FormGroup;

  chambreSelectionnee!: Chambre ;
  constructor(private chambreService: ChambreService,private blocService:BlocService,private fb:FormBuilder) {
    let formControls = {
      typeC: new FormControl('', Validators.required),
      blocId: new FormControl(null, Validators.required),
    }
    this.ChambreForm = this.fb.group(formControls);


  }

  ngOnInit() {
    this.loadChambres();
    this.loadBlocs();
    this.getBlocIdValue?.valueChanges.subscribe((selectedId: number) => {
      console.log(selectedId)
      this.selectedBlocId= selectedId;
    });
    this.getTypeValue?.valueChanges.subscribe((selectedType: TypeChambre) => {
      console.log(selectedType)

      this.selectedType= selectedType;
    });

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
        //console.log(this.blocs);
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
  getNombreChambreParTypeEtBloc(type: TypeChambre , idBloc: number ): void {

    console.log(type)
    console.log(idBloc)
    this.chambreService.nombreChambreParTypeEtBloc(type,idBloc).subscribe({
      next: (nombreChambres) => {


        console.log("nombre chambre :", nombreChambres)
      this.nbChambre=nombreChambres;
        // Fais ce que tu veux avec le nombre de chambres, peut-être mettre à jour une propriété dans le composant.
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du nombre de chambres');
      }
    });
  }
  get getTypeValue() { return this.ChambreForm.get('typeC'); }
  get getBlocIdValue() { return this.ChambreForm.get('blocId'); }


  protected readonly Chambre= Chambre;
  protected readonly TypeChambre = TypeChambre;
}
