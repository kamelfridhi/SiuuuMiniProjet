// chambre.model.ts

import { Bloc } from "./bloc2";
import { Reservation } from "./reservation";


export interface ChambresPage {
    content: ChambreDTO[],
    totalPages: number,
    last: boolean,
    number: number
  }
  
export interface Chambre {
    idChambre?: number;
    numeroChambre: number;
    typeC: TypeChambre;
    reservations?: Reservation[];
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
  