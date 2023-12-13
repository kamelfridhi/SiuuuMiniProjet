import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAlertDirective]'
})
export class AlertDirectiveDirective {
  @Input() alert="";

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='green'
    this.el.nativeElement.style.color='white'
    this.el.nativeElement.innerText=this.alert


  }

}
