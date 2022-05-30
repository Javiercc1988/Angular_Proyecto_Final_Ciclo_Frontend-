import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userData: IUsers = {};
  readOnly: boolean = false;

  baseUrl: string = environment.baseUrl;
  apiUrl: string = environment.apiUsers;
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  /**
   * Función que recibe como parámetro los datos a guardar en el objeto generado en el servicio para poder ser consumido en cualquier otra parte de la aplicación.
   * @param data
   */
  saveDataUser(data: IUsers) {
    this.userData = data;
    console.log('Desde el servicio: ', data);
  }

  /**
   * Función con endpoint implementado para obtener todos los datos de los usuarios registrados, o limitarlo a un número concreto por parámetro.
   * @param limit Parámetro que establece el limite de usuarios a mostrar.
   * @returns
   */
  getUsersData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  /**
   * Función con endpoint establecido para obtener los datos de un usuario concreto filtrado por ID
   * @param idUser ID única del usuario.
   * @returns
   */
  getUsersFromId(idUser?: string) {
    return this.http.get<any>(`${this.url}/${idUser}`);
  }

  /**
   * Función con endpoint establecido para crear un nuevo usuario
   * @param user Parametros obligatorios y opcionales del usuario.
   * @returns
   */
  createNewUser(user: IUsers) {
    return this.http.post<IUsers>(`${this.url}`, user);
  }

  /**
   * Función con endpoint establecido para editar un usuario concreto pasando las modificaciones por parametro
   * @param user Datos a modificar del usuario.
   * @returns
   */
  editUser(user: IUsers) {
    return this.http.put<IUsers>(`${this.url}/${user.uid}`, user);
  }

  /**
   * Función con endpoint establecido para eliminar un usuario.
   * @param idUser ID única del usuario a eliminar.
   * @returns
   */
  deleteUser(idUser: string) {
    return this.http.delete<IUsers>(`${this.url}/${idUser}`);
  }
}
