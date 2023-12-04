import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {ActivatedRoute, Router} from "@angular/router";
import {FoyerService} from "../../../../_Services/foyer.service";
import {AfficherRestoComponent} from "../afficher-resto/afficher-resto.component";
import {Resto} from "../../../../_Models/resto/resto";
import {RestoService} from "../../../../_Services/resto/resto.service";

@Component({
  selector: 'app-modifier-resto',
  templateUrl: './modifier-resto.component.html',
  styleUrls: ['./modifier-resto.component.css']
})
export class ModifierRestoComponent implements OnInit{
  resto!: Resto;

  constructor(private modifierCompo:AfficherRestoComponent, private restoService: RestoService, private ar: ActivatedRoute, private r : Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((p) => {
      this.restoService.getRestoById(p['id']).subscribe(value => this.resto=value);
    });
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  updateResto() {
    this.restoService.updateFoyer(this.resto).subscribe({
      next: (res) => {
        this.r.navigateByUrl('/back/restaurant/table').then(value => {
         this.restoService.announceRestoUpdate();
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
