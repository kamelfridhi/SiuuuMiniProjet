import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';

import {AddFoyerComponent} from "./foyer/add-foyer/add-foyer.component";
import {AfficherFoyerComponent} from "./foyer/afficher-foyer/afficher-foyer.component";
import {ModifierFoyerComponent} from "./foyer/modifier-foyer/modifier-foyer.component";
import { FoyerDashComponent } from './foyer/foyer-dash/foyer-dash.component';
import { FoyerDetailsComponent } from './foyer/foyer-blocs/foyer-details.component';
import {AddRestoComponent} from "./resto/add-resto/add-resto.component";
import {AfficherRestoComponent} from "./resto/afficher-resto/afficher-resto.component";
import {RestoDashComponent} from "./resto/resto-dash/resto-dash.component";
import {ModifierRestoComponent} from "./resto/modifier-resto/modifier-resto.component";
import {RestoDetailsComponent} from "./resto/resto-foyers/resto-details.component";
import { PersoDirectiveDirective } from './foyer/directives/perso-directive.directive';
import { DeleteTableDirectiveDirective } from './foyer/directives/delete-table-directive.directive';

import { AfficherBlocsComponent } from './afficher-blocs/afficher-blocs.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DetailblocComponent } from './detailbloc/detailbloc.component';



import { AdminComponent } from './admin/admin.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import {FormsModule} from "@angular/forms";




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
    DeleteTableDirectiveDirective,


    AfficherBlocsComponent,
    DetailblocComponent,




  ],
  imports: [
    CommonModule,
    BackRoutingModule,


    HttpClientModule,
    

    MatTableModule,
    MatCheckboxModule,


    FormsModule,
    ReactiveFormsModule,

   



  ]
})
export class BackModule { 
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
