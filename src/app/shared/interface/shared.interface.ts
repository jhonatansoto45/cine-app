import { Boletos } from '../../cine-app/interface/cine-app.interface';

export interface MenuSelection {
  ubicacion: string;
  sucursal: string;
  fecha: string;
  horario?: string;
  boletos?: Boletos[];
  totalNeto?: number;
}
