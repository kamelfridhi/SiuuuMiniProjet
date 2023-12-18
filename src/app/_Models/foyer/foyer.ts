
import {Universite} from "../universite";
import {Bloc} from "../bloc/bloc";
import {Resto} from "../resto/resto";


export class Foyer {
  idFoyer!:number;
  nomFoyer!:string ;
  capaciteFoyer!:number;

  u!:Universite;
  resto!:Resto;
  blocs:Bloc[]=[];
  etat!:number;
}


