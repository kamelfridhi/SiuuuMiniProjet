import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdduniversiteComponent} from "./universite/adduniversite/adduniversite.component";
import {UpdateuniversiteComponent} from "./universite/updateuniversite/updateuniversite.component";
import {AfficheuvComponent} from "./universite/afficheuv/afficheuv.component";
import {AffectedfoyerComponent} from "./universite/affectedfoyer/affectedfoyer.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      /***bayoudh***/

      { path:"university",loadChildren:()=>import('./universite/universite.module').then(m=>m.UniversiteModule)}

      /***bayoudh***/

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
