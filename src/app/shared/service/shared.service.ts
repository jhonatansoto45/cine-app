import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  ubicaciones: { posicion: string }[] = [
    {
      posicion: 'Calle 80',
    },
    {
      posicion: 'Calle 13 con Av Boyacá',
    },

    {
      posicion: 'Av Ciudad de Cali',
    },
    {
      posicion: 'Av Ciudad de Cali con Americas',
    },
    {
      posicion: 'Calle 13',
    },
  ];

  sucursales: { nombre: string }[] = [
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
  ];

  fechas: { fecha: string }[] = [
    {
      fecha: '31 de Enero',
    },
    {
      fecha: '1 de Febrero',
    },
    {
      fecha: '2 de Febrero',
    },
    {
      fecha: '6 de Febrero',
    },
    {
      fecha: '10 de Febrero',
    },
  ];

  constructor() {}


}
