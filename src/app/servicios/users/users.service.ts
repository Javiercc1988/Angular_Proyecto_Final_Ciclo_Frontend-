import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userData: IUsers = {};
  readOnly: boolean = false

  baseUrl: string = environment.baseUrl;
  apiUrl: string = environment.apiUsers;
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${this.baseUrl}/${this.apiUrl}`;
  }

  saveDataUser(data: IUsers) {
    this.userData = data;
    console.log('Desde el servicio: ', data);
  }

  getUsersData(limit?: number) {
    return this.http.get<any>(`${this.url}?limite=${limit}`);
  }

  getUsersFromId(idUser?: string) {
    return this.http.get<any>(`${this.url}/${idUser}`);
  }

  createNewUser(user: IUsers) {
    return this.http.post<IUsers>(`${this.url}`, user);
  }

  editUser(user: IUsers) {
    return this.http.put<IUsers>(`${this.url}/${user.uid}`, user);
  }

  deleteUser(idUser: string) {
    return this.http.delete<IUsers>(`${this.url}/${idUser}`);
  }
}
