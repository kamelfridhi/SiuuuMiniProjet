import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import {UniversitesComponent} from "./components/front/universites/universites.component";
import {DetailUnivComponent} from "./components/front/universites/detail-univ/detail-univ.component";

import {AfficherchambresComponent} from "./components/front/chambre/afficherchambres/afficherchambres.component";
import {DetailschambrerComponent} from "./components/front/chambre/detailschambre/detailschambrer.component";

import {AfficherFoyerComponent} from "./components/front/foyer/afficher-foyer/afficher-foyer.component";
import {FoyerDetailsComponent} from "./components/front/foyer/foyer-details/foyer-details.component";


import { BlocComponent } from './components/front/bloc/bloc/bloc.component';
import { DetailblocComponent } from './components/front/bloc/detailbloc/detailbloc.component';

import { ReserverChambreComponent } from './components/front/reserver-chambre/reserver-chambre.component';
import { ListeChambreComponent } from './components/front/liste-chambre/liste-chambre.component';

import {LoginComponent} from "./components/front/login/login.component";
import {AuthentificationGuard} from "./Authen/authentification.guard";
import {RoleGuardGuard} from "./Authen/role-guard.guard";
import {UpdateloginComponent} from "./components/front/login/updatelogin/updatelogin.component";



const routes: Routes = [
 //{ path:"front",loadChildren:()=>import('./components/front/front.module').then(m=>m.FrontModule)},
 { path:"back",loadChildren:()=>import('./components/back/back.module').then(m=>m.BackModule),canActivate:[RoleGuardGuard,AuthentificationGuard]},
  // canActivate:[RoleGuardGuard,AuthentificationGuard]

 {
  path: '',
component: UserTemplateComponent,
children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  { path: 'showuniversite', component: UniversitesComponent ,canActivate:[AuthentificationGuard]},
  { path: 'showdetail/:id', component: DetailUnivComponent ,canActivate:[AuthentificationGuard]},


  { path: 'afficherchambres', component: AfficherchambresComponent ,canActivate:[AuthentificationGuard]},
  { path: 'detailchambre/:id', component: DetailschambrerComponent,canActivate:[AuthentificationGuard] },


  { path: 'Bloc', component: BlocComponent,canActivate:[AuthentificationGuard] },
  { path: 'bloc/:blocId', component: DetailblocComponent ,canActivate:[AuthentificationGuard]},
  { path: 'Reserver/:id', component: ReserverChambreComponent,canActivate:[AuthentificationGuard] },
  { path: 'Chambres', component: ListeChambreComponent,canActivate:[AuthentificationGuard]},
  {path:"update_profile/:id",component:UpdateloginComponent,canActivate:[AuthentificationGuard]},
  // add your route for user n3awed lil user kahaw moch admin user kahaw !!!!!!!!
  { path: 'foyer', component: AfficherFoyerComponent ,canActivate:[AuthentificationGuard]},
  { path: 'details/:id', component: FoyerDetailsComponent,canActivate:[AuthentificationGuard] },

  ]
 },



{ path: 'login', component: LoginComponent },

{ path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
