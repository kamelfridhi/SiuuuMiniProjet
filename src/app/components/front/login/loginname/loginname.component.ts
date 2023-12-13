import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Etudiant} from "../../../../_Models/etudiant";
import {EtudiantConnecteService} from "../../../../_Services/etudiant-connecte.service";
import {EtudiantService} from "../../../../_Services/etudiant.service";

@Component({
  selector: 'app-loginname',
  templateUrl: './loginname.component.html',
  styleUrls: ['./loginname.component.css']
})
export class LoginnameComponent implements OnInit {
 constructor() { }
  @Input() etudiantLogin!: Etudiant;
  ngOnInit(): void {

  }


}
