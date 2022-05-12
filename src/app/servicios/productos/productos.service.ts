import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'xToken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWM1ODRmNDZmM2M4ZTBhZjIzYWY4Y2QiLCJpYXQiOjE2NTIzMzc2MjcsImV4cCI6MTY1MjM1MjAyN30.zR9B1dAkYKjhzNevW1ejq0Xg7WIfYAhDjL8mQJ8K2Rg" });
    
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
    let options = { headers: this.headers };
    return this.http.post<IProduct>(`${this.url}`, data, options);

  }
}
