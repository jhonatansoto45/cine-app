import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private cineService: CineAppService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cineService.scrollTop();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.pelicula = this.dataPeliculas[id];
    });
  }

  get dataPeliculas() {
    return this.cineService.data;
  }
}
