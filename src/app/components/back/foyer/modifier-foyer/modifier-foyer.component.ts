import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../../_Models/foyer/foyer";
import {ActivatedRoute, Router} from "@angular/router";
import {FoyerService} from "../../../../_Services/foyer.service";
import {AfficherFoyerComponent} from "../afficher-foyer/afficher-foyer.component";

@Component({
  selector: 'app-modifier-resto',
  templateUrl: './modifier-foyer.component.html',
  styleUrls: ['./modifier-foyer.component.css']
})
export class ModifierFoyerComponent implements OnInit{
  foyer!: Foyer;

  constructor(private modifierCompo:AfficherFoyerComponent,private foyerService: FoyerService, private ar: ActivatedRoute,private r : Router) {}

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
