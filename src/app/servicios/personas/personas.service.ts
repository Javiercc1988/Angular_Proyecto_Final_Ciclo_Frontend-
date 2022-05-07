import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl:string = environment.baseUrl
  apiUrl:string = environment.apiPersons
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;

  }

  getPersonsData() {
    return this.http.get<any>(`${this.url}`);
  }
  
}
