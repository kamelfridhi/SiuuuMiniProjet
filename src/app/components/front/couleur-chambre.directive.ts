import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCouleurChambre]'
})
export class CouleurChambreDirective implements OnInit{
  @Input() appCouleurChambre!: string; 

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.applyColor();
  }

  private applyColor() {
    let color: string;

    switch (this.appCouleurChambre) {
      case 'Simple':
        color = 'blue';
        break;
      case 'Double':
        color = 'green';
        break;
      case 'Triple':
        color = 'red';
        break;
      default:
        color = 'black';
        break;
    }
    console.log('Applying color:', color);
    console.log(this.appCouleurChambre);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
