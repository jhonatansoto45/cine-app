import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EntradaPelicula } from 'src/app/interface/general.interface';
import { GeneralService } from '../../service/general.service';

@Injectable({
  providedIn: 'root',
})
export class CineAppGuard implements CanActivate {
  constructor(private generalService: GeneralService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const model: EntradaPelicula = this.generalService.getSessionStorage;

    if (!model.horario) {
      return false;
    } else {
      return true;
    }
  }
}
