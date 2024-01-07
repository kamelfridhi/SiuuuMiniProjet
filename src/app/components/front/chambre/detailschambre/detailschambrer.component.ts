import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ChambreService } from '../../../../_Services/chambre.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Chambre} from "../../../../_Models/chambre2";

@Component({
  selector: 'app-detailschambrer',
  templateUrl: './detailschambrer.component.html',
  styleUrls: ['./detailschambrer.component.css']
})
export class DetailschambrerComponent implements OnInit{
   chambre!: Chambre;
   id!:number;

   ngOnInit() {
     this.id = this.ar.snapshot.params['id'];

   }

  constructor(private ar:ActivatedRoute) { }


}
