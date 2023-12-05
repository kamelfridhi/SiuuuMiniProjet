import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AdduniversiteComponent } from './universite/adduniversite/adduniversite.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateuniversiteComponent } from './universite/updateuniversite/updateuniversite.component';
import { AfficheuvComponent } from './universite/afficheuv/afficheuv.component';
import { AffectedfoyerComponent } from './universite/affectedfoyer/affectedfoyer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AdduniversiteComponent,
    UpdateuniversiteComponent,
    AfficheuvComponent,
    AffectedfoyerComponent
  ],
    imports: [
        CommonModule,
        BackRoutingModule,
        FormsModule,
      HttpClientModule,ReactiveFormsModule,  MatAutocompleteModule,
      MatInputModule

    ]
})
export class BackModule { }
