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

  /**
   * Función encargada de setear el correo del usuario en el session storage
   * @param userLogin Datos del usuario a traer el login
   * @returns
   */
  getLogin(userLogin: IUserLogin) {
    this.sessionStorage.set('user', userLogin.correo);
    return this.http.post<any>(`${this.url}/login`, userLogin);
  }
  /**
   * Función encargada de comprobar si el usuario está logueado a traves del session storage
   * @returns
   */
  isLogged() {
    const user = this.sessionStorage.get('user');

    return !user ? false : true;
  }
}
