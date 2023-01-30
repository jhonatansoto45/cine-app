import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
import { MenuSelection } from 'src/app/shared/interface/shared.interface';
import { Boletos } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.scss'],
})
export class BoletosComponent implements OnInit {
  model!: MenuSelection;
  readonly maxEntradas: number = 10;

  constructor(
    private cineService: CineAppService,
    private generalService: GeneralService
  ) {
    this.model = this.generalService.getSessionStorage;
  }

  ngOnInit(): void {
    this.cineService.scrollTop();
    if(this.model.boletos){
      this.cineService.boletos = this.model.boletos!;
    }
  }

  get boletos(): Boletos[] {
    return this.cineService.boletos;
  }

  eliminarBoleto(index: number): void {
    this.boletos[index].entradas = this.boletos[index].entradas - 1;
    this.boletos[index].totalPrecioEntrada =
      this.boletos[index].totalPrecioEntrada - this.boletos[index].precio;

    this.addSessionStorage();
  }

  agregarBoleto(index: number): void {
    if (this.boletos[index].entradas < this.maxEntradas) {
      this.boletos[index].entradas = this.boletos[index].entradas + 1;
      this.boletos[index].totalPrecioEntrada =
        this.boletos[index].totalPrecioEntrada + this.boletos[index].precio;
      this.addSessionStorage();
    }
  }

  private addSessionStorage(): void {
    this.model.totalNeto = this.boletos.reduce(
      (a, b) => a + b.totalPrecioEntrada,
      0
    );

    this.model = { ...this.model, boletos: this.boletos };
    this.generalService.setSessionStorage(this.model);
  }
}
