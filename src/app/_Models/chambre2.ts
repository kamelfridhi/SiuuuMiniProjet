// chambre.model.ts

import { Reservation } from "./reservation";
import {Bloc} from "./bloc/bloc";


export interface ChambresPage {
    content: ChambreDTO[],
    totalPages: number,
    last: boolean,
    number: number
  }

export class Chambre {
    idChambre?: number;
    numeroChambre: number;
    typeC: TypeChambre;
    reservations?: Reservation[];
    blocchambre?:Bloc;

}


  export interface ChambreDTO {
    idChambre: number;
    numeroChambre: number;
    typeC: TypeChambre;
    blocChambre: Bloc;
    numR: number;
  }


  export enum TypeChambre {
    Simple,
    Double,
    Triple
  }
