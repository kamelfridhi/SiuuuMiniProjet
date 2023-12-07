import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import {AdduniversiteComponent} from "./adduniversite/adduniversite.component";
import {UpdateuniversiteComponent} from "./updateuniversite/updateuniversite.component";
import {AfficheuvComponent} from "./afficheuv/afficheuv.component";
import {AffectedfoyerComponent} from "./affectedfoyer/affectedfoyer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AdduniversiteComponent,
    UpdateuniversiteComponent,
    AfficheuvComponent,
    AffectedfoyerComponent],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
     FormsModule,
    HttpClientModule,ReactiveFormsModule,  MatAutocompleteModule,
    MatInputModule
  ]
})
export class UniversiteModule { }
