import { Injectable } from '@angular/core';
import { MenuItem } from '../interface/shared.interface';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  listados: MenuItem[] = [
    {
      menu: 'Ubicaciones',
      children: [
        {
          nombre: 'Calle 80',
        },
        {
          nombre: 'Calle 13 con Av Boyacá',
        },
        {
          nombre: 'Av Ciudad de Cali',
        },
        {
          nombre: 'Av Ciudad de Cali con Americas',
        },
        {
          nombre: 'Calle 13',
        },
      ],
    },
    {
      menu: 'Cines Cercanos',
      children: [
        {
          nombre: 'CineColombia Titan',
        },
        {
          nombre: 'Cinemark Multiplaza',
        },
        {
          nombre: 'Cinepolis Hayuelos',
        },
        {
          nombre: 'Procinal Tintal',
        },
        {
          nombre: 'CineColombia Portal 80',
        },
        {
          nombre: 'Procinal Viva Fontibon',
        },
      ],
    },
    {
      menu: 'Fechas',
      children: [
        {
          nombre: '31 de Enero',
        },
        {
          nombre: '1 de Febrero',
        },
        {
          nombre: '2 de Febrero',
        },
        {
          nombre: '6 de Febrero',
        },
        {
          nombre: '10 de Febrero',
        },
      ],
    },
  ];

  constructor() {}
}
