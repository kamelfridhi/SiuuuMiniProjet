import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {EtudiantConnecteService} from "../_Services/etudiant-connecte.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private etudinateConnecte: EtudiantConnecteService,private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   if(this.etudinateConnecte.getrole('admin'))
   {
     return true;
   }
   this.router.navigate(['/Home']);
return false;
  }

}
