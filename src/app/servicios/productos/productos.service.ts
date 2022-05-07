import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProducts.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  baseUrl: string = environment.baseUrl;  //'http://localhost:8080'
  apiUrl: string = environment.apiProducts; //'api/productos'
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  getProductsData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  getProductFromId(idProduct?: string) {
    return this.http.get<any>(`${this.url}/${idProduct}`);
  }

  createNewProduct(data: IProduct) {
    return this.http.post<IProduct>(`${this.url}`, data);
  }
}
