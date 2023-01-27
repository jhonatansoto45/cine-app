import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MenuSelection } from '../../../shared/interface/shared.interface';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-card-horario',
  templateUrl: './card-horario.component.html',
  styleUrls: ['./card-horario.component.scss'],
})
export class CardHorarioComponent implements OnInit {
  listeningDropdown!: Subscription;
  model!: MenuSelection;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.listeningDropdown = this.generalService.menuSelection$.subscribe(
      (selection) => (this.model = selection)
    );

    this.model = this.generalService.getSessionStorage;
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
      } else if (itemClassName.includes('chip__active')) {
        item.classList.remove('chip__active');
        this.assignSessionStorage('');
      }
    }
  }

  assignSessionStorage(horario: string): void {
    this.model = { ...this.model, horario: horario };
    this.generalService.setSessionStorage(this.model);
  }
}
