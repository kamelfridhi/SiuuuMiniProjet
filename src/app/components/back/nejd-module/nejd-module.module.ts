import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NejdModuleRoutingModule } from './nejd-module-routing.module';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveDirective } from './directive.directive';
import {AppModule} from "../../../app.module";
import {StatistiqueComponent} from "./reservation/statistique/statistique.component";
import {CalculComponent} from "./reservation/calcul/calcul.component";


@NgModule({
  declarations: [
    ListReservationComponent,
    DirectiveDirective,
    StatistiqueComponent,
    CalculComponent

  ],
  imports: [
    CommonModule,
    NejdModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class NejdModuleModule {
  constructor() {
    this.loadScript('src/assets/Back/vendor/jquery/jquery.min.js');
    this.loadScript('src/assets/Back/vendor/bootstrap/js/bootstrap.bundle.min.js');
    this.loadScript('src/assets/Back/vendor/jquery-easing/jquery.easing.min.js');
    this.loadScript('src/assets/Back/js/sb-admin-2.min.js');
    this.loadScript('src/assets/Back/vendor/datatables/jquery.dataTables.min.js');
    this.loadScript('src/assets/Back/vendor/datatables/dataTables.bootstrap4.min.js');
    this.loadScript('src/assets/Back/js/demo/datatables-demo.js');
  }

  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }



 }
