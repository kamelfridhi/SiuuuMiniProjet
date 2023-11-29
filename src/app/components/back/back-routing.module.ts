import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AfficherFoyerComponent} from "./foyer/afficher-foyer/afficher-foyer.component";
import {AddFoyerComponent} from "./foyer/add-foyer/add-foyer.component";
import {ModifierFoyerComponent} from "./foyer/modifier-foyer/modifier-foyer.component";
import {FoyerDashComponent} from "./foyer/foyer-dash/foyer-dash.component";

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full'},
      { path: 'Dashboard',
        component: DashboardComponent
      },
      /*BEGIN FOYER*/
      {
        path: 'foyer',
        component: FoyerDashComponent,
        children:[
          { path:'', redirectTo: 'afficher',pathMatch: 'full',  },
          { path: 'afficher', component: AfficherFoyerComponent  },
          { path: 'ajouter', component: AddFoyerComponent  },
          { path: 'modifier/:id', component: ModifierFoyerComponent },
        ]
      },
      /*END FOYER*/
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
