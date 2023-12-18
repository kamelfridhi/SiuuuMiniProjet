import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';


const routes: Routes = [
  {path:"reservations",component:ListReservationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NejdModuleRoutingModule { }
