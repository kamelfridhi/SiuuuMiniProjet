import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ChambreService } from '../../../../_Services/chambre.service';
import {Chambre} from "../../../../_Models/chambre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detailschambre',
  templateUrl: './detailschambre.component.html',
  styleUrls: ['./detailschambre.component.css']
})
export class DetailschambreComponent{
    @Input() chambre!: Chambre;  // Input pour recevoir la chambre à afficher

  constructor() { }


}
