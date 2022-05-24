import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from 'src/app/interfaces/IUserLogin.interface';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl; //'http://localhost:8080'
  apiUrl: string = environment.apiAuth; //'api/auth'
  url: string;

  constructor(
    private http: HttpClient,
    private sessionStorage: SessionStorageService
  ) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  getLogin(userLogin: IUserLogin) {
    this.sessionStorage.set('user', userLogin.correo);
    return this.http.post<any>(`${this.url}/login`, userLogin);
  }

  isLogged() {
    const user = this.sessionStorage.get('user');

    return !user ? false : true;
  }
}
