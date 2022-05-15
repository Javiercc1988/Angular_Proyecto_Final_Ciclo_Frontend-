import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string = environment.baseUrl
  apiUrl:string = environment.apiCategorias
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;

  }

  getCategoryData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  getCategoryFromId(idUser?: string) {
    return this.http.get<any>(`${this.url}/${idUser}`);
  }

  createNewCategory(data: ICategorys) {
    return this.http.post<ICategorys>(`${this.url}`, data);
  }

  deleteCategory(idUser: string) {
    return this.http.delete<ICategorys>(`${this.url}/${idUser}`);
  }
}
