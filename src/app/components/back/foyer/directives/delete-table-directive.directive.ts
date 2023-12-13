import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {Foyer} from "../../../../_Models/foyer/foyer";

@Directive({
  selector: '[appDeleteTableDirective]'
})
export class DeleteTableDirectiveDirective {
  @Input() f!: Foyer;


  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnChanges() {
    if (this.f.blocs && this.f.blocs.length === 0) {
      this.renderer.addClass(this.el.nativeElement, 'd-none');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'd-none');
    }
  }

}
