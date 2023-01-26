import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';
import { CardHorarioComponent } from './card-horario/card-horario.component';

@NgModule({
  declarations: [InfoPeliculaComponent, CardHorarioComponent],
  imports: [CommonModule],
  exports: [InfoPeliculaComponent,CardHorarioComponent],
})
export class ComponentsReusableModule {}
