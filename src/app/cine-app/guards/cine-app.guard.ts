import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralService } from '../../service/general.service';

@Injectable({
  providedIn: 'root',
})
export class CineAppGuard implements CanActivate {


  constructor(private generalService: GeneralService, private router: Router) {
    //this.model = this.generalService.getSessionStorage;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
   /*  console.log(this.model.horario);

    if (this.model.horario) {
      return true;
    } else {
      this.router.navigate(['./peliculas']);
      return false;
    } */
    return true
  }
}
