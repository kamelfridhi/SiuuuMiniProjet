import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import {AfficherchambresComponent} from "./components/front/chambre/afficherchambres/afficherchambres.component";
import {DetailschambrerComponent} from "./components/front/chambre/detailschambre/detailschambrer.component";

const routes: Routes = [
 //{ path:"front",loadChildren:()=>import('./components/front/front.module').then(m=>m.FrontModule)},
 { path:"back",loadChildren:()=>import('./components/back/back.module').then(m=>m.BackModule)},
 {
  path: '',
component: UserTemplateComponent,
children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'afficherchambres', component: AfficherchambresComponent },
  { path: 'detailchambre/:id', component: DetailschambrerComponent },

  // add your route for user n3awed lil user kahaw moch admin user kahaw !!!!!!!!


]
},
{ path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
