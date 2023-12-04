import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AfficherchambreComponent } from './chambres/afficherchambre/afficherchambre.component';
import { ModifierchambreComponent } from './chambres/modifierchambre/modifierchambre.component';
import { SupprimerchambreComponent } from './chambres/supprimerchambre/supprimerchambre.component';
import { AjouterchambreComponent } from './chambres/ajouterchambre/ajouterchambre.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailschambreComponent } from './chambres/detailschambre/detailschambre.component';
import {ChambresModule} from "./chambres/chambres.module";



@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AfficherchambreComponent,
    ModifierchambreComponent,
    SupprimerchambreComponent,
    AjouterchambreComponent,
    DetailschambreComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChambresModule
  ]
})
export class BackModule { }
