import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  baseUrl: string = environment.baseUrl;
  apiUrl: string = environment.apiUploads;
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  setUserImage(userId: string, data: any) {
    return this.http.get<any>(`${this.url}/usuarios/${userId}`, data);
  }

  setProductImage(productId: any, data: any) {
    return this.http.put<any>(`${this.url}/productos/${productId}`, data);
  }
}
