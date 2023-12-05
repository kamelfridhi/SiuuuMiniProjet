import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import {AddFoyerComponent} from "./foyer/add-foyer/add-foyer.component";
import {AfficherFoyerComponent} from "./foyer/afficher-foyer/afficher-foyer.component";
import {ModifierFoyerComponent} from "./foyer/modifier-foyer/modifier-foyer.component";
import { FoyerDashComponent } from './foyer/foyer-dash/foyer-dash.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FoyerDetailsComponent } from './foyer/foyer-blocs/foyer-details.component';
import {AddRestoComponent} from "./resto/add-resto/add-resto.component";
import {AfficherRestoComponent} from "./resto/afficher-resto/afficher-resto.component";
import {RestoDashComponent} from "./resto/resto-dash/resto-dash.component";
import {ModifierRestoComponent} from "./resto/modifier-resto/modifier-resto.component";
import {RestoDetailsComponent} from "./resto/resto-foyers/resto-details.component";
import { PersoDirectiveDirective } from './foyer/directives/perso-directive.directive';
import { DeleteTableDirectiveDirective } from './foyer/directives/delete-table-directive.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AddFoyerComponent,
    AfficherFoyerComponent,
    ModifierFoyerComponent,
    FoyerDashComponent,
    FoyerDetailsComponent,
    AddRestoComponent,
    AfficherRestoComponent,
    RestoDashComponent,
    ModifierRestoComponent,
    RestoDetailsComponent,
    PersoDirectiveDirective,
    DeleteTableDirectiveDirective
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BackModule { }
