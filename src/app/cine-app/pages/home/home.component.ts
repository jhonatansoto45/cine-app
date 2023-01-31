import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaPelicula } from 'src/app/interface/general.interface';
import { GeneralService } from '../../../service/general.service';

import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  peliculas: Pelicula[] = [];

  constructor(
    private cineService: CineAppService,
    private posterService: ImageService,
    private generalService: GeneralService,
    private router: Router
  ) {
    cineService.scrollTop();
    this.peliculas = cineService.data;
  }

  get images() {
    return [...this.posterService.posters];
  }

  cartelera(): void {
    const heightDiv = document.querySelector('.legend')?.clientHeight;

    window.scrollTo({
      behavior: 'smooth',
      top: heightDiv! + 480,
    });
  }

  detallePelicula(index: number): void {
    let model: EntradaPelicula = this.generalService.getSessionStorage;

    if (model.id && model.id !== index) {
      model.id = index;
      model.boletos = this.cineService.boletos.map((item) => ({
        ...item,
        entradas: 0,
        totalPrecioEntrada: 0,
      }));
      model.horario = '';
      model.totalNeto = 0;
    } else if (model.id === null) {
      model.id = index;
    }

    this.generalService.setSessionStorage(model);
    this.router.navigate(['./peliculas/detalle', index]);
  }
}
