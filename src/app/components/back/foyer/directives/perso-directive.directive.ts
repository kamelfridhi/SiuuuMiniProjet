import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Bloc} from "../../../../_Models/bloc/bloc";
import {Foyer} from "../../../../_Models/foyer/foyer";

@Directive({
  selector: '[appPersoDirective]'
})

export class PersoDirectiveDirective {
  @Input() f!: Foyer;


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {

      this.renderer.addClass(this.el.nativeElement, 'alert');

      if (this.f.blocs && this.f.blocs.length === 0) {
        this.renderer.removeClass(this.el.nativeElement, 'alert-success');
        this.renderer.addClass(this.el.nativeElement, 'alert-danger');
        this.el.nativeElement.textContent = 'Aucun bloc trouvé du foyer : ' +this.f.nomFoyer;
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'alert-danger');
        this.renderer.addClass(this.el.nativeElement, 'alert-success');
        this.el.nativeElement.textContent = ' Table des blocs du foyer : '+this.f.nomFoyer;
      }
    }


}
