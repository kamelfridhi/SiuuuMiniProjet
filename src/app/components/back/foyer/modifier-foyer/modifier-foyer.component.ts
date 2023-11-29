import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {ActivatedRoute, Router} from "@angular/router";
import {FoyerService} from "../../../../_Services/foyer.service";

@Component({
  selector: 'app-modifier-foyer',
  templateUrl: './modifier-foyer.component.html',
  styleUrls: ['./modifier-foyer.component.css']
})
export class ModifierFoyerComponent implements OnInit{
  foyer!: Foyer;
  id!:number;

  constructor(private foyerService: FoyerService, private ar: ActivatedRoute,private r : Router) {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    console.log(this.id);
    this.foyerService.getFoyerByID(this.id).subscribe(f => this.foyer=f);
  }
  updateFoyer(formFoyer: NgForm) {
    this.foyerService.updateFoyer(this.foyer).subscribe({
      next: (res) => {
        this.r.navigate(['/back/foyer/afficher']);
      },
      error: (err) => {
        alert("Erreur lors de l'update du foyer");
      }
    });

  }


}
