import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { CineAppRoutingModule } from './cine-app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CompraComponent } from './pages/compra/compra.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { TipoPagoComponent } from './pages/tipo-pago/tipo-pago.component';
import { ComponentsReusableModule } from './components/components-reusable.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    CompraComponent,
    SeleccionComponent,
    TipoPagoComponent,
  ],
  imports: [
    CommonModule,
    CineAppRoutingModule,
    ComponentsReusableModule,
    IvyCarouselModule,
    SharedModule,
  ],
})
export class CineAppModule {}
