import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaPelicula } from '../../interface/general.interface';
import { GeneralService } from '../../service/general.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  seleccion: EntradaPelicula = {
    id: null,
    fecha: '31 de Enero',
    boletos: [],
    horario: '',
    sucursal: 'CineColombia Titan',
    totalNeto: 0,
    ubicacion: 'Calle 80',
  };

  constructor(
    private generalService: GeneralService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  get listados() {
    return [...this.sharedService.listados];
  }

  ngOnInit(): void {
    if (this.generalService.getSessionStorage) {
      const model = this.generalService.getSessionStorage;
      this.generalService.menuSelection$.next(model);
    } else {
      this.generalService.setSessionStorage(this.seleccion);
    }
  }

  redirectHome(): void {
    this.router.navigate(['./peliculas/home']);
  }

  emitSelection(field: string): void {
    if (this.generalService.getSessionStorage) {
      let model = this.generalService.getSessionStorage;
      model[field] = (this.seleccion as any)[field];
      console.log(model);

      this.generalService.setSessionStorage(model);
    } else {
      this.generalService.setSessionStorage(this.seleccion);
    }
  }
}
