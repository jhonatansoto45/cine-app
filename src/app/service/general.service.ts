import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EntradaPelicula } from '../interface/general.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  menuSelection$: Subject<EntradaPelicula> = new Subject<EntradaPelicula>();

  constructor() {}

  setSessionStorage(model: EntradaPelicula) {
    this.menuSelection$.next(model);
    sessionStorage.setItem('selectionDropdown', JSON.stringify(model));
  }

  get getSessionStorage() {
    return JSON.parse(sessionStorage.getItem('selectionDropdown')!);
  }
}
