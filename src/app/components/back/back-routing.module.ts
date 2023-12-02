import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdduniversiteComponent} from "./universite/adduniversite/adduniversite.component";
import {UpdateuniversiteComponent} from "./universite/updateuniversite/updateuniversite.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      /***bayoudh***/
      { path: 'adduniversite', component: AdduniversiteComponent },
      { path: 'updateuniversite/:id', component: UpdateuniversiteComponent },
      /***bayoudh***/

      // add your route for admin n3awed for admin
    ]
  },
 // { path: '**', redirectTo: 'Dashboard' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
