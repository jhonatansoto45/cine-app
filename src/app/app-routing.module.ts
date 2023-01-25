import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./cine-app/cine-app.module').then((m) => m.CineAppModule),
  },
  {
    path: '**',
    redirectTo: 'peliculas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
