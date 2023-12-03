import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {ActivatedRoute, Router} from "@angular/router";
import {FoyerService} from "../../../../_Services/foyer.service";
import {AfficherRestoComponent} from "../afficher-resto/afficher-resto.component";

@Component({
  selector: 'app-modifier-resto',
  templateUrl: './modifier-resto.component.html',
  styleUrls: ['./modifier-resto.component.css']
})
export class ModifierRestoComponent implements OnInit{
  foyer!: Foyer;

  constructor(private modifierCompo:AfficherRestoComponent, private foyerService: FoyerService, private ar: ActivatedRoute, private r : Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((p) => {
      this.foyerService.getFoyerByID(p['id']).subscribe(value => this.foyer=value);
    });
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  updateFoyer(formFoyer: NgForm) {
    this.foyerService.updateFoyer(this.foyer).subscribe({
      next: (res) => {
        this.r.navigateByUrl('/back/foyer/table').then(value => {
          this.foyerService.announceFoyerUpdate();
          //scroll to top with animation
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
          }
        );
      },
      error: (err) => {
        alert("Erreur lors de l'update du foyer");
      }
    });

  }


}
