import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import {AfficherFoyerComponent} from "./components/front/foyer/afficher-foyer/afficher-foyer.component";
import {FoyerDetailsComponent} from "./components/front/foyer/foyer-details/foyer-details.component";

const routes: Routes = [
 //{ path:"front",loadChildren:()=>import('./components/front/front.module').then(m=>m.FrontModule)},

 {
  path: '',
component: UserTemplateComponent,
children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  // add your route for user n3awed lil user kahaw moch admin user kahaw !!!!!!!!
  { path: 'foyer', component: AfficherFoyerComponent },
  { path: 'details/:id', component: FoyerDetailsComponent },

  ]
 },
  { path:"back",loadChildren:()=>import('./components/back/back.module').then(m=>m.BackModule)},

{ path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
