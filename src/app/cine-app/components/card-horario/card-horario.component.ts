import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { EntradaPelicula } from '../../../interface/general.interface';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-card-horario',
  templateUrl: './card-horario.component.html',
  styleUrls: ['./card-horario.component.scss'],
})
export class CardHorarioComponent implements OnInit {
  listeningDropdown!: Subscription;
  menu!: EntradaPelicula;

  horario: string = '';
  disabledButton: boolean = true;

  constructor(private generalService: GeneralService, private router: Router) {
    if (this.generalService.getSessionStorage) {
      this.menu = this.generalService.getSessionStorage;
    }
  }

  ngOnInit(): void {
    this.listeningDropdown = this.generalService.menuSelection$.subscribe(
      (selection) => (this.menu = selection)
    );
  }

  ngOnDestroy(): void {
    this.horario = '';
    this.listeningDropdown.unsubscribe();
  }

  seletedHorario(id: number): void {
    const btns = document.querySelectorAll('.card__chipHorario');

    for (let index = 0; index < btns.length; index++) {
      const itemClassName = btns[index].className;
      const item = btns[index];
      if (Number(item.id) === id && !itemClassName.includes('chip__active')) {
        item.classList.add('chip__active');
        this.horario = item.innerHTML;
        this.disabledButton = false;
      } else if (
        itemClassName.includes('chip__active') &&
        Number(item.id) === id
      ) {
        item.classList.remove('chip__active');
        this.disabledButton = true;
      } else {
        item.classList.remove('chip__active');
      }
    }
  }

  navegar(): void {
    this.assignSessionStorage();
    this.router.navigate(['./peliculas/boletos', this.menu.id]);
  }

  private assignSessionStorage(): void {
    this.menu.horario = this.horario;
    this.generalService.setSessionStorage(this.menu);
  }
}
