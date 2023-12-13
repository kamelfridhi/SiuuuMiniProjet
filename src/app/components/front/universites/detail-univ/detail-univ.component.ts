import {Component, Input, OnInit} from '@angular/core';
import {Universite} from "../../../../_Models/universite";
import {ActivatedRoute} from "@angular/router";
import {UniversiteService} from "../../../../_Services/universite.service";

@Component({
  selector: 'app-detail-univ',
  templateUrl: './detail-univ.component.html',
  styleUrls: ['./detail-univ.component.css']
})
export class DetailUnivComponent implements OnInit {
u!: Universite;
id!: number;
constructor(private ar:ActivatedRoute,private usservice:UniversiteService) {
}
  ngOnInit(): void {
    this.id= this.ar.snapshot.params['id'];
    this.usservice.getUniversiteById(this.id).subscribe(value => this.u = value);
  }


}
