import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryData: ICategorys = {};
  readOnly: boolean = false;

  baseUrl: string = environment.baseUrl;
  apiUrl: string = environment.apiCategorias;
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  /**
   * Función que recibe como parámetro los datos a guardar en el objeto generado en el servicio para poder ser consumido en cualquier otra parte de la aplicación.
   * @param data
   */
  saveDataCategory(data: ICategorys) {
    this.categoryData = data;

    console.log('Desde el servicio: ', data);
  }

  /**
   * Función que resetea el objeto del servicio a un estado default.
   */
  resetDataCategory() {
    this.categoryData = {};
  }

  /**
   * Función con endpoint implementado para establecer el limite de categorías a mostrar, su uso es útil para paginación.
   * @param limit Parámetro que establece el limite de categorías a mostrar.
   * @returns
   */
  getCategoryData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  /**
   * Función con endpoint implementado para establecer una busqueda concreta a través de ID de categoría.
   * @param categoryId Parametro de ID para buscar una categoría concreta.
   * @returns
   */
  getCategoryFromId(categoryId?: string) {
    return this.http.get<any>(`${this.url}/${categoryId}`);
  }

  /**
   * Función con endpoint implementado para crear una nueva categoría
   * @param data Objeto con datos necesarios para crear la categoría.
   * @returns
   */
  createNewCategory(data: ICategorys) {
    return this.http.post<ICategorys>(`${this.url}`, data);
  }

  /**
   * Función con endpoint implementado para editar una categoría ya creada.
   * @param data Datos de la categoría a editar.
   * @returns
   */
  editCategory(data: ICategorys) {
    return this.http.put<ICategorys>(`${this.url}/${data._id}`, data);
  }

  /**
   * Función con endpoint implementado para eliminar categorías.
   * @param categoryId Id concreta de la categoría a eliminar.
   * @returns
   */
  deleteCategory(categoryId: string) {
    return this.http.delete<ICategorys>(`${this.url}/${categoryId}`);
  }
}
