import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EtudiantConnecteService} from "../../../_Services/etudiant-connecte.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../frontcss.css'],
  encapsulation:ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  constructor(private etudiantConnecte: EtudiantConnecteService) {
  }


  ngOnInit(): void {

  }


}
