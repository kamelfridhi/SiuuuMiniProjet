import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { AdduniversiteComponent } from './universite/adduniversite/adduniversite.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateuniversiteComponent } from './universite/updateuniversite/updateuniversite.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    AdduniversiteComponent,
    UpdateuniversiteComponent
  ],
    imports: [
        CommonModule,
        BackRoutingModule,
        FormsModule,
      HttpClientModule,ReactiveFormsModule

    ]
})
export class BackModule { }
