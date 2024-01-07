import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdduniversiteComponent} from "./universite/adduniversite/adduniversite.component";
import {UpdateuniversiteComponent} from "./universite/updateuniversite/updateuniversite.component";
import {AfficheuvComponent} from "./universite/afficheuv/afficheuv.component";
import {AffectedfoyerComponent} from "./universite/affectedfoyer/affectedfoyer.component";

import {AfficherchambreComponent} from "./chambres/afficherchambre/afficherchambre.component";
import {AjouterchambreComponent} from "./chambres/ajouterchambre/ajouterchambre.component";
import {ModifierchambreComponent} from "./chambres/modifierchambre/modifierchambre.component";
import {DetailschambreComponent} from "./chambres/detailschambre/detailschambre.component";

import {AfficherFoyerComponent} from "./foyer/afficher-foyer/afficher-foyer.component";
import {AddFoyerComponent} from "./foyer/add-foyer/add-foyer.component";
import {ModifierFoyerComponent} from "./foyer/modifier-foyer/modifier-foyer.component";
import {FoyerDashComponent} from "./foyer/foyer-dash/foyer-dash.component";
import {FoyerDetailsComponent} from "./foyer/foyer-blocs/foyer-details.component";
import {AfficherRestoComponent} from "./resto/afficher-resto/afficher-resto.component";
import {ModifierRestoComponent} from "./resto/modifier-resto/modifier-resto.component";
import {AddRestoComponent} from "./resto/add-resto/add-resto.component";
import {RestoDetailsComponent} from "./resto/resto-foyers/resto-details.component";

import { AfficherBlocsComponent } from './afficher-blocs/afficher-blocs.component';
import { DetailblocComponent } from './detailbloc/detailbloc.component';

import {AdminComponent} from "./admin/admin.component";
import {UpdateuserComponent} from "./admin/updateuser/updateuser.component";
import {RoleGuardGuard} from "../../Authen/role-guard.guard";
import {AuthentificationGuard} from "../../Authen/authentification.guard";



const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [


      /*BEGIN FOYER*/
      {
        path: 'foyer',
        component: FoyerDashComponent,
        children:[
          { path:'', redirectTo: 'table',pathMatch: 'full',  },
          { path: 'table', component: AfficherFoyerComponent,
            children:[
              { path: 'modifier/:id', component: ModifierFoyerComponent },
              { path: 'Details/:id', component: FoyerDetailsComponent },
            ]
          },
          { path: 'ajouter', component: AddFoyerComponent  },

        ]
      },
      {
        path: 'restaurant',
        component: FoyerDashComponent,
        children:[
          { path:'', redirectTo: 'table',pathMatch: 'full',  },
          { path: 'table', component: AfficherRestoComponent,
            children:[
              { path: 'modifier/:id', component: ModifierRestoComponent },
              { path: 'Details/:id', component: RestoDetailsComponent },

            ]
          },
          { path: 'ajouter', component: AddRestoComponent  },

        ]
      },
      /*END FOYER*/

      { path:"n",loadChildren:()=>import('./nejd-module/nejd-module.module').then(m=>m.NejdModuleModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },

      /***bayoudh***/

      { path:"university",loadChildren:()=>import('./universite/universite.module').then(m=>m.UniversiteModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},

      /***bayoudh***/


      { path: 'afficherchambre', component: AfficherchambreComponent },
      { path: 'ajouterchambre', component: AjouterchambreComponent },
      { path: 'modifierchambre/:id', component:ModifierchambreComponent },
      { path: 'supprimerchambre', component: AjouterchambreComponent },
      { path: 'detailschambre/:id', component: DetailschambreComponent },



// add your route for admin n3awed for admin


      { path: 'getblocs', component: AfficherBlocsComponent },
      { path: 'detailbloc', component: DetailblocComponent },

      { path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},
      { path:"university",loadChildren:()=>import('./universite/universite.module').then(m=>m.UniversiteModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},

      //canActivate:[RoleGuardGuard,AuthentificationGuard]

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
