export interface ImageToPath {
  path: string;
}

export interface Pelicula {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
}

export interface Boletos {
  categoria: Categoria;
  precio: number;
  entradas: number;
  totalPrecioEntrada:number
}

export enum Categoria {
  adultos = 'ADULTOS',
  ninos = 'NIÑOS',
  tercerEdad = '3ERA EDAD',
}
