import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../_Services/universite.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {Universite} from "../../../_Models/universite";

@Component({
  selector: 'app-universites',
  templateUrl: './universites.component.html',
  styleUrls: ['./universites.component.css']
})
export class UniversitesComponent implements OnInit{
  universties!: Universite[];

  ngOnInit(): void {
    this.getuniversities();
  }
  constructor(private univservice: UniversiteService,private router:Router) {}
  getuniversities(): void {

    this.univservice.getAllUniversites().subscribe(value => {
      this.universties = value;
    });


  }

  gotodetail(id: number): void {
    this.router.navigate(['/showdetail/'+id]);

  }
}
