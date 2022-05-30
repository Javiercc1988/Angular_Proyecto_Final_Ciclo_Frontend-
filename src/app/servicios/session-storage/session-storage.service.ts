import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  /**
   * Función para introducir un elemento en el sessionStorage del navegador
   * @param key El nombre que tendremos de referencia hacia el objeto de datos.
   * @param data Los datos del objeto a introducir
   */
  set(key: string, data: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving session variable', e);
    }
  }

  /**
   * Función para extraer un elemento del sessionStorage para su uso o comprobación.
   * @param key El nombre que tendremos de referencia hacia el objeto de datos que queremos extraer.
   * @returns
   */
  get(key: string) {
    try {
      if (sessionStorage.getItem(key) !== '') {
        return JSON.parse(sessionStorage.getItem(key) || '');
      } else {
        return null;
      }
    } catch (e) {
      console.error('Error getting session variable', e);
      return null;
    }
  }

  /**
   * Función para eliminar un elemento establecido en el sessionStorage.
   * @param key Nombre del elemento a eliminar.
   * @returns
   */
  deleteItemInStorage(key: string): any {
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error('Error al deleting session variable', e);
      return null;
    }
  }
}
