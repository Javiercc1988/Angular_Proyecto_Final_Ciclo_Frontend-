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

  productData:IProducts = {}

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  saveDataProduct(data: IProducts) {
    this.productData = data

    console.log("Desde el servicio: ", data)
  }

  resetDataProduct() {
    this.productData = {}
  }

  getProductsData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  getProductFromId(idProduct?: string) {
    return this.http.get<any>(`${this.url}/${idProduct}`);
  }

  createNewProduct(data: IProducts) {
    return this.http.post<IProduct>(`${this.url}`, data);
  }

  deleteProduct(idProduct: string) {
    return this.http.delete<IProduct>(`${this.url}/${idProduct}`);
  }
}
