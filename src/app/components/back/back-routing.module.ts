import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from "./admin/admin.component";
import {UpdateuserComponent} from "./admin/updateuser/updateuser.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'update/user/:id', component: UpdateuserComponent},
      // add your route for admin n3awed for admin
    ]
  },
  { path: '**', redirectTo: 'Dashboard' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
