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

  ],
  imports: [
    CommonModule,
    BackRoutingModule,

    FormsModule,
    ReactiveFormsModule

   

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
