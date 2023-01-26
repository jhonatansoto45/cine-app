import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  pelicula!: Pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cineService: CineAppService
  ) {}

  ngOnInit(): void {
    this.cineService.scrollTop();
    /*     this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.cineService.getMovieId(id)))
      .subscribe((movie) => {}); */

    this.activatedRoute.params.subscribe(({ id }) => {
      this.pelicula = this.dataPeliculas[id];
    });
  }

  get dataPeliculas() {
    return this.cineService.data;
  }
}
