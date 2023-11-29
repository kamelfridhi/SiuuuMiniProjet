import { Injectable } from '@angular/core';
import {Etudiant} from "../_Models/etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantConnecteService {

  constructor() {
  }

  private etudiantConnecte: Etudiant | null = null;

  setEtudiantConnecte(etudiant: Etudiant): void {
    this.etudiantConnecte = etudiant;
  }

  getEtudiantConnecte(): Etudiant | null {
    return this.etudiantConnecte;

  }
}
