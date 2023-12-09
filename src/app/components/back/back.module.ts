import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AfficherBlocsComponent } from './afficher-blocs/afficher-blocs.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DetailblocComponent } from './detailbloc/detailbloc.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AfficherBlocsComponent,
    DetailblocComponent,
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class BackModule { }
