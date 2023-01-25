import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';

@NgModule({
  declarations: [InfoPeliculaComponent],
  imports: [CommonModule],
  exports: [InfoPeliculaComponent],
})
export class ComponentsReusableModule {}
