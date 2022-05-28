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
  readOnly: boolean = false

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

  createNewProduct(product: IProducts) {
    return this.http.post<IProducts>(`${this.url}`, product);
  }

  editProduct(product: IProducts) {
    return this.http.put<IProducts>(`${this.url}/${product._id}`, product);
  }

  deleteProduct(idProduct: string) {
    return this.http.delete<IProducts>(`${this.url}/${idProduct}`);
  }
}
