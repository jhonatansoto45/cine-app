import { Component, OnInit } from '@angular/core';
import { Boletos, EntradaPelicula } from 'src/app/interface/general.interface';
import { GeneralService } from '../../../service/general.service';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.scss'],
})
export class BoletosComponent implements OnInit {
  readonly maxEntradas: number = 10;
  model: EntradaPelicula = {
    boletos: [],
    fecha: '',
    horario: '',
    id: null,
    sucursal: '',
    totalNeto: 0,
    ubicacion: '',
  };

  constructor(
    private generalService: GeneralService,
    private cineService: CineAppService
  ) {
    cineService.scrollTop();
    if (this.generalService.getSessionStorage) {
      this.model = this.generalService.getSessionStorage;
      if (this.model.boletos.length > 0) {
        cineService.boletos = this.model.boletos;
      } else {
        cineService.boletos = this.boletos;
      }
    }
  }

  ngOnInit(): void {}

  get boletos() {
    return [...this.cineService.boletos];
  }

  agregarBoleto(index: number): void {
    if (this.boletos[index].entradas < this.maxEntradas) {
      this.numeroEntradas(index, '+');
      this.addSessionStorage();
    }
  }

  eliminarBoleto(index: number): void {
    this.numeroEntradas(index, '-');
    this.addSessionStorage();
  }

  private addSessionStorage(): void {
    this.model.totalNeto = this.boletos.reduce(
      (a, b) => a + b.totalPrecio,
      0
    );

    this.model.boletos = this.boletos;
    this.generalService.setSessionStorage(this.model);
  }

  //* UTILIDADES
  private numeroEntradas(index: number, operator: '+' | '-'): void {
    switch (operator) {
      case '+':
        this.boletos[index].entradas = this.boletos[index].entradas + 1;
        this.precioFinal(index, '+');
        break;

      case '-':
        this.boletos[index].entradas = this.boletos[index].entradas - 1;
        this.precioFinal(index, '-');
        break;
    }
  }

  private precioFinal(index: number, operator: '+' | '-'): void {
    switch (operator) {
      case '+':
        this.boletos[index].totalPrecio =
          this.boletos[index].totalPrecio + this.boletos[index].precioUnitario;
        break;

      case '-':
        this.boletos[index].totalPrecio =
          this.boletos[index].totalPrecio - this.boletos[index].precioUnitario;
        break;
    }
  }
}
