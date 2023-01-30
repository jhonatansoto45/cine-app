import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';
import { CardHorarioComponent } from './card-horario/card-horario.component';
import { ResumenCompraComponent } from './resumen-compra/resumen-compra.component';

@NgModule({
  declarations: [
    CardHorarioComponent,
    InfoPeliculaComponent,
    ResumenCompraComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardHorarioComponent,
    InfoPeliculaComponent,
    ResumenCompraComponent,
  ],
})
export class ComponentsReusableModule {}
