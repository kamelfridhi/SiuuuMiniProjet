import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path:"n",loadChildren:()=>import('./nejd-module/nejd-module.module').then(m=>m.NejdModuleModule)},
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
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
