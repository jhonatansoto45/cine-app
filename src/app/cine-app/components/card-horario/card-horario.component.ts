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

    this.model = JSON.parse(sessionStorage.getItem('selectionDropdown')!);
  }

  ngOnDestroy(): void {
    this.listeningDropdown.unsubscribe();
  }

  seletedHorario(id: number): void {
    const btns = Array.from(document.querySelectorAll('.card__chipHorario'));

    for (let index = 0; index < btns.length; index++) {
      const itemClassName = btns[index].className;
      const item = btns[index];

      if (!itemClassName.includes('chip__active') && Number(item.id) === id) {
        item.classList.add('chip__active');
      } else {
        item.classList.remove('chip__active');
      }
    }
  }
}
