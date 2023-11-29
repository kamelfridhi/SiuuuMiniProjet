import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import {AddFoyerComponent} from "./foyer/add-foyer/add-foyer.component";
import {AfficherFoyerComponent} from "./foyer/afficher-foyer/afficher-foyer.component";
import {ModifierFoyerComponent} from "./foyer/modifier-foyer/modifier-foyer.component";
import { FoyerDashComponent } from './foyer/foyer-dash/foyer-dash.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AddFoyerComponent,
    AfficherFoyerComponent,
    ModifierFoyerComponent,
    FoyerDashComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
