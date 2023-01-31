import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Boletos, EntradaPelicula } from '../../../interface/general.interface';
import { GeneralService } from '../../../service/general.service';
import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss'],
})
export class ResumenCompraComponent implements OnChanges, OnInit, OnDestroy {
  movie!: Pelicula;
  model!: EntradaPelicula;

  @Input() seleccion: boolean = false;

  sala: number = 0;

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

  ngOnChanges(changes: SimpleChanges): void {
    if ('seleccion' in changes && this.seleccion) {
      this.sala = Math.floor(Math.random() * 10);
    }
  }

  ngOnInit(): void {
    this.modelSubscription = this.generalService.menuSelection$.subscribe(
      (model) => {
        this.model = model;
      }
    );

    this.entradasTotalStr();
  }

  ngOnDestroy(): void {
    this.modelSubscription.unsubscribe();
  }

  get movieData() {
    return [...this.cineService.data];
  }

  entradasTotalStr = (): string => {
    let msg: string = '';

    this.model.boletos.forEach((item: any) => {
      msg = msg.concat(
        `${item.entradas} ${item.categoria} ($${item.precio}), `
      );
    });

    return msg;
  };

  navegarSeleccion(): void {
    this.router.navigate(['/peliculas/seleccion']);
  }
}
