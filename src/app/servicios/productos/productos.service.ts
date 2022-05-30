import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { IProductFormData } from 'src/app/interfaces/Forms/IProductFormData.interface';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  baseUrl: string = environment.baseUrl; //'http://localhost:8080'
  apiUrl: string = environment.apiProducts; //'api/productos'
  url: string;

  productData: IProducts = {};
  readOnly: boolean = false;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  /**
   * Función que recibe como parámetro los datos a guardar en el objeto generado en el servicio para poder ser consumido en cualquier otra parte de la aplicación.
   * @param data
   */
  saveDataProduct(data: IProducts) {
    this.productData = data;

    console.log('Desde el servicio: ', data);
  }

  /**
   * Función que resetea el objeto del servicio a un estado default.
   */
  resetDataProduct() {
    this.productData = {};
  }

  /**
   * Función con endpoint establecido para obtener los datos de todos los productos o un limite establecido por parametro.
   * @param limit Limite de productos a mostrar
   * @returns
   */
  getProductsData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  /**
   * Función con endpoint establecido para obtener los datos de un producto concreto filtrado por ID
   * @param idProduct ID única del producto.
   * @returns
   */
  getProductFromId(idProduct?: string) {
    return this.http.get<any>(`${this.url}/${idProduct}`);
  }

  /**
   * Función con endpoint establecido para crear un nuevo producto
   * @param product Parametros obligatorios y opcionales del producto.
   * @returns
   */
  createNewProduct(product: IProducts) {
    return this.http.post<IProducts>(`${this.url}`, product);
  }

  /**
   * Función con endpoint establecido para editar un producto concreto pasando las modificaciones por parametro
   * @param product Datos a modificar del producto.
   * @returns
   */
  editProduct(product: IProducts) {
    return this.http.put<IProducts>(`${this.url}/${product._id}`, product);
  }

  /**
   * Función con endpoint establecido para eliminar un producto.
   * @param idProduct ID única del producto a eliminar.
   * @returns
   */
  deleteProduct(idProduct: string) {
    return this.http.delete<IProducts>(`${this.url}/${idProduct}`);
  }
}
