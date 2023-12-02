import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateuserComponent } from './admin/updateuser/updateuser.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AdminComponent,
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule
  ]
})
export class BackModule { }
