export interface IProducts {
  categoria?: {
    nombre?: string;
    _id?: string;
  };
  disponible?: boolean;
  img?: string;
  nombre?: string;
  precio?: number;
  usuario?: {
    nombre?: string;
    _id?: string;
  };
}

export interface IProduct {
  nombre: string;
  categoria: string;
  precio: number;
}
