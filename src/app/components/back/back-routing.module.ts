import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from "./admin/admin.component";
import {UpdateuserComponent} from "./admin/updateuser/updateuser.component";
import {RoleGuardGuard} from "../../Authen/role-guard.guard";
import {AuthentificationGuard} from "../../Authen/authentification.guard";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path:"n",loadChildren:()=>import('./nejd-module/nejd-module.module').then(m=>m.NejdModuleModule)},
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},
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
