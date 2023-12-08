import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import {UniversitesComponent} from "./components/front/universites/universites.component";
import {DetailUnivComponent} from "./components/front/universites/detail-univ/detail-univ.component";

const routes: Routes = [
 //{ path:"front",loadChildren:()=>import('./components/front/front.module').then(m=>m.FrontModule)},
 { path:"back",loadChildren:()=>import('./components/back/back.module').then(m=>m.BackModule)},
 {
  path: '',
component: UserTemplateComponent,
children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'showuniversite', component: UniversitesComponent },
  { path: 'showdetail/:id', component: DetailUnivComponent }
  // add your route for user n3awed lil user kahaw moch admin user kahaw !!!!!!!!


]
},
//{ path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
