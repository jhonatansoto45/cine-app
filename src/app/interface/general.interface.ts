export interface EntradaPelicula {
  id: number | null;
  ubicacion: string;
  sucursal: string;
  fecha: string;
  horario: string;
  boletos: Boletos[];
  totalNeto: number;
}

export interface Boletos {
  categoria: Categoria;
  precioUnitario: number;
  entradas: number;
  totalPrecio: number;
}

export enum Categoria {
  adultos = 'ADULTOS',
  ninos = 'NIÑOS',
  tercerEdad = '3ERA EDAD',
}
