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
    this.listeningDropdown.unsubscribe();
  }

  seletedHorario(id: number): void {
    const btns = document.querySelectorAll('.card__chipHorario');

    for (let index = 0; index < btns.length; index++) {
      const itemClassName = btns[index].className;
      const item = btns[index];
      if (Number(item.id) === id && !itemClassName.includes('chip__active')) {
        item.classList.add('chip__active');
        this.assignSessionStorage(item.innerHTML);
      } else if (
        itemClassName.includes('chip__active') &&
        Number(item.id) === id
      ) {
        item.classList.remove('chip__active');
        this.assignSessionStorage('');
      } else {
        item.classList.remove('chip__active');
      }
    }
  }

  assignSessionStorage(horario: string): void {
    this.menu.horario = horario;
    this.generalService.setSessionStorage(this.menu);
  }

  navegar(): void {
    this.router.navigate(['./peliculas/boletos', this.menu.id]);
  }
}
