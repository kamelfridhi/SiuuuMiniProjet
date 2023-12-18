import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cartchambre',
  templateUrl: './cartchambre.component.html',
  styleUrls: ['./cartchambre.component.css']
})
export class CartchambreComponent {

  @Output() detailsEmitterSimple = new EventEmitter<number>();
  @Output() detailsEmitterDouble = new EventEmitter<number>();
  @Output() detailsEmitterTriple = new EventEmitter<number>();

  constructor(private router:Router) { }

  goToDetailsChambreSimple() {
    this.detailsEmitterSimple.emit();
  }
  goToDetailsChambreDouble() {
    this.detailsEmitterDouble.emit();
  }

  goToDetailsChambreTriple() {
    this.detailsEmitterTriple.emit();
  }


  rserver() {
    this.router.navigate(['/Chambres']);
  }
}
