import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AfficherchambreComponent} from "./chambres/afficherchambre/afficherchambre.component";
import {AjouterchambreComponent} from "./chambres/ajouterchambre/ajouterchambre.component";
import {ModifierchambreComponent} from "./chambres/modifierchambre/modifierchambre.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'afficherchambre', component: AfficherchambreComponent },
      { path: 'ajouterchambre', component: AjouterchambreComponent },
      { path: 'modifierchambre', component:ModifierchambreComponent },
      { path: 'supprimerchambre', component: AjouterchambreComponent },



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
