import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

import { MenuSelection } from '../interface/shared.interface';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model: MenuSelection = {
    fecha: '31 de Enero',
    sucursal: 'Cinemark Multiplaza',
    ubicacion: 'Calle 80',
  };

  constructor(
    private generalService: GeneralService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  get ubicaciones() {
    return [...this.sharedService.ubicaciones];
  }

  get sucursales() {
    return [...this.sharedService.sucursales];
  }

  get fechas() {
    return [...this.sharedService.fechas];
  }

  ngOnInit(): void {
    sessionStorage.setItem('selectionDropdown', JSON.stringify(this.model));
  }

  redirectHome(): void {
    this.router.navigate(['./peliculas/home']);
  }

  emitSelection(): void {
    sessionStorage.setItem('selectionDropdown', JSON.stringify(this.model));
    this.generalService.menuSelection$.next(this.model);
  }
}
