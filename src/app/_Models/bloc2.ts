import { Chambre } from "./chambre2";

export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capaciteBloc: number;
  chambres: Chambre[];
}
