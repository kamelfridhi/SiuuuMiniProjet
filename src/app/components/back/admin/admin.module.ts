import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


import {FormsModule} from "@angular/forms";
import {AdminComponent} from "./admin.component";
import {UpdateuserComponent} from "./updateuser/updateuser.component";


@NgModule({
  declarations: [
    AdminComponent,
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ]
})
export class AdminModule { }
