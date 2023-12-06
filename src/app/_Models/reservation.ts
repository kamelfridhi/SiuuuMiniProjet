export interface ReservationsPage {
  content: Reservation[],
  totalPages: number,
  last: boolean,
  number: number
}

export class Reservation {
  
  constructor(
    public numReservation: string,
    public debuteAnneUniversite: string,
    public finAnneUniversite: string,
    public anneeUniversitaire: Date,
    public description: string,
    public etat: EtatReservation|String,
    public typePayment: TypePayment|String,
    public typeRepat: TypeRepat|String,
    public idReservation?: number
  ) {}
  
  } 
 
  export enum EtatReservation {
    NEW="NEW",
    EN_ATTENTE = "EN_ATTENTE",
    ACCEPTE = "ACCEPTE",
    REFUSE = "REFUSE"
  }
  
  export enum TypePayment {
    CACHE = "CACHE",
    CHEQUE = "CHEQUE",
    CARTE_BANCAIRE = "CARTE_BANCAIRE"
  
  }
  
  export enum TypeRepat {
    SIMPLE = "SIMPLE",
  DOUBLE = "DOUBLE",
  TRIPLE = "TRIPLE"
  }