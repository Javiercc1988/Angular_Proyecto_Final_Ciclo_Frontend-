import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  
  baseUrl:string = environment.baseUrl
  apiUrl:string = environment.apiProducts
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;

  }

  getProductsData(limit?:number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }
  getProductFromId(idProduct?:string) {
    return this.http.get<any>(`${this.url}/${idProduct}`);
  }

}
