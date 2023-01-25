import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  get ubicaciones() {
    return [...this.sharedService.ubicaciones];
  }

  get sucursales() {
    return [...this.sharedService.sucursales];
  }

  get fechas(){
    return [...this.sharedService.fechas]
  }

  ngOnInit(): void {}
}
