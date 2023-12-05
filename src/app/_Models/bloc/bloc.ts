import { Chambre } from "../chambre/chambre";
import { Foyer } from "../foyer/foyer";

export class Bloc {
    blocId!: number;
    nomBloc!: string;
    capaciteBloc!: number;
    foyer: Foyer | null = null;
    chambres: Chambre[] = [] ;
}
