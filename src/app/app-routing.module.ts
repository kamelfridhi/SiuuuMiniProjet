import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import { ReserverChambreComponent } from './components/front/reserver-chambre/reserver-chambre.component';
import { ListeChambreComponent } from './components/front/liste-chambre/liste-chambre.component';

const routes: Routes = [
 //{ path:"front",loadChildren:()=>import('./components/front/front.module').then(m=>m.FrontModule)},
 { path:"back",loadChildren:()=>import('./components/back/back.module').then(m=>m.BackModule)},
 {
  path: '',
component: UserTemplateComponent,
children: [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Reserver/:id', component: ReserverChambreComponent },
  { path: 'Chambres', component: ListeChambreComponent}
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
