import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/service/general.service';
import { MenuSelection } from 'src/app/shared/interface/shared.interface';
import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss'],
})
export class ResumenCompraComponent implements OnInit, OnDestroy {
  movie!: Pelicula;
  menu!: MenuSelection;
  model!: MenuSelection;
  modelSubscription!: Subscription;

  total: number = 0;

  constructor(
    private generalService: GeneralService,
    private cineService: CineAppService,
    private activatedRouter: ActivatedRoute
  ) {
    this.menu = this.generalService.getSessionStorage;
    this.total = this.menu.totalNeto!;
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      this.movie = this.movieData[id];
    });

    this.modelSubscription = this.generalService.menuSelection$.subscribe(
      (model) => {
        this.total = model.totalNeto!;
        this.menu = model;
        this.generalService.setSessionStorage(this.menu);
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
