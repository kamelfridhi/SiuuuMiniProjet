import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class EmailDirective {
  @Input() appGravatar: string = ''

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }


  ngOnChanges() {
    const emailHash = CryptoJS.MD5(this.appGravatar.toLowerCase()).toString();
    const gravatarUrl = `${emailHash}?s=80`;

    // Mettez à jour l'attribut src de l'élément img avec l'URL Gravatar
    this.renderer.setAttribute(this.el.nativeElement, 'src', gravatarUrl);
  }


}
