import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntradaPelicula } from '../../../interface/general.interface';
import { GeneralService } from '../../../service/general.service';
import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss'],
})
export class ResumenCompraComponent implements OnInit, OnDestroy {
  movie!: Pelicula;
  model!: EntradaPelicula;

  modelSubscription!: Subscription;

  constructor(
    private generalService: GeneralService,
    private cineService: CineAppService,
    private router: Router
  ) {
    if (this.generalService.getSessionStorage) {
      this.model = this.generalService.getSessionStorage;
      this.movie = this.movieData[this.model.id!];
    } else {
      this.router.navigate(['/peliculas/home']);
    }
  }

  ngOnInit(): void {
    this.modelSubscription = this.generalService.menuSelection$.subscribe(
      (model) => {
        this.model = model;
      }
    );
  }

  ngOnDestroy(): void {
    this.modelSubscription.unsubscribe();
  }

  get movieData() {
    return [...this.cineService.data];
  }
}
