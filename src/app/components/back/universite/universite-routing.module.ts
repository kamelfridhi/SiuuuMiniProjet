import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdduniversiteComponent} from "./adduniversite/adduniversite.component";
import {UpdateuniversiteComponent} from "./updateuniversite/updateuniversite.component";
import {AfficheuvComponent} from "./afficheuv/afficheuv.component";
import {AffectedfoyerComponent} from "./affectedfoyer/affectedfoyer.component";

const routes: Routes = [
  { path: 'adduniversite', component: AdduniversiteComponent },
  { path: 'updateuniversite/:id', component: UpdateuniversiteComponent },
  { path: 'aff', component: AfficheuvComponent },
  { path: 'affectedfoyer/:id', component: AffectedfoyerComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
