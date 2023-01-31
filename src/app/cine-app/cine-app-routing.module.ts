import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineAppGuard } from './guards/cine-app.guard';
import { BoletosComponent } from './pages/boletos/boletos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'detalle/:id',
        component: DetalleComponent,
      },
      {
        path: 'boletos/:id',
        component: BoletosComponent,
        canActivate: [CineAppGuard],
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CineAppRoutingModule {}
