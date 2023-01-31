import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../service/general.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  get listados() {
    return [...this.sharedService.listados];
  }

  ngOnInit(): void {

  }

  redirectHome(): void {
    this.router.navigate(['./peliculas/home']);
  }

  emitSelection(): void {

  }
}
