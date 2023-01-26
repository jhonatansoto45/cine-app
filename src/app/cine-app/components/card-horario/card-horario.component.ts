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

  seletedHorario(event: MouseEvent): void {
    const item = event.target as any;
    item.classList.forEach((element: any) => {
      if (element.includes('card__chipHorario__active')) {
        item.classList.remove('card__chipHorario__active');
      } else {
        item.classList.add('card__chipHorario__active');
      }
    });
  }
}
