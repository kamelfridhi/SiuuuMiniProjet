
import { Foyer } from "../foyer/foyer";
import {Chambre} from "../chambre2";

export class Bloc {
  idBloc!:number;
    nomBloc!: string;
    capaciteBloc!: number;
    foyer: Foyer | null = null;
    chambres: Chambre[] = [] ;

}
