import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambresRoutingModule } from './chambres-routing.module';
import { AlertDirectiveDirective } from './afficherchambre/alert-directive.directive';


@NgModule({
  declarations: [


    AlertDirectiveDirective
  ],
  exports: [
    AlertDirectiveDirective
  ],
  imports: [
    CommonModule,
    ChambresRoutingModule
  ]
})
export class ChambresModule { }
