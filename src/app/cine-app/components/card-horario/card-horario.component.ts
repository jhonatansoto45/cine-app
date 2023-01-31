import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GeneralService } from '../../../service/general.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-horario',
  templateUrl: './card-horario.component.html',
  styleUrls: ['./card-horario.component.scss'],
})
export class CardHorarioComponent implements OnInit {
  listeningDropdown!: Subscription;

  idMovie: number = 0;

  constructor(
    private generalService: GeneralService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //this.model = this.generalService.getSessionStorage;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => (this.idMovie = id));

   /*  this.listeningDropdown = this.generalService.menuSelection$.subscribe(
      (selection) => (this.model = selection)
    ); */
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
  /*   this.model = { ...this.model, horario: horario };
    this.generalService.setSessionStorage(this.model); */
  }

  navegar(): void {
    this.router.navigate(['./peliculas/boletos', this.idMovie]);
  }
}
