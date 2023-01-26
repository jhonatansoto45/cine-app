import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private sharedService: SharedService, private router: Router) {}

  get ubicaciones() {
    return [...this.sharedService.ubicaciones];
  }

  get sucursales() {
    return [...this.sharedService.sucursales];
  }

  get fechas() {
    return [...this.sharedService.fechas];
  }

  redirectHome(): void {
    this.router.navigate(['./peliculas/home']);
  }
}
