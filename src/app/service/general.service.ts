import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MenuSelection } from '../shared/interface/shared.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  menuSelection$: Subject<MenuSelection> = new Subject<MenuSelection>();

  constructor() {}

  setSessionStorage(model: MenuSelection) {
    this.menuSelection$.next(model);
    sessionStorage.setItem('selectionDropdown', JSON.stringify(model));
  }

  get getSessionStorage() {
    return JSON.parse(sessionStorage.getItem('selectionDropdown')!);
  }
}
