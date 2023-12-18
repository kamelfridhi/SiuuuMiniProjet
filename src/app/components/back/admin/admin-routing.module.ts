import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AdminComponent} from "./admin.component";
import {UpdateuserComponent} from "./updateuser/updateuser.component";

const routes: Routes = [

  { path: 'user', component: AdminComponent },
  { path: 'update/user/:id', component: UpdateuserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
