import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AdduniversiteComponent } from './universite/adduniversite/adduniversite.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AdduniversiteComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
