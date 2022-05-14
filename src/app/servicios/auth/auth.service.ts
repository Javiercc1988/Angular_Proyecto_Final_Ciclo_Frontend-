import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/interfaces/IUserLogin.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl; //'http://localhost:8080'
  apiUrl: string = environment.apiAuth; //'api/productos'
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  getLogin(userLogin: IUserLogin) {
    return this.http.post<any>(`${this.url}/login`, userLogin);
  }

}
