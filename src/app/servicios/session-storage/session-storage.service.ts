import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  set(key: string, data: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving session variable', e);
    }
  }

  get(key: string) {
    try {
      if (sessionStorage.getItem(key) !== '') {
        return JSON.parse(sessionStorage.getItem(key) || '');
      } else {
        return null;
      }
    } catch (e) {
      console.error('Error getting session variable', e);
      return null;
    }
  }

  deleteItemInStorage(key: string): any {
    try {
      sessionStorage.removeItem(key)
    } catch (e) {
      console.error('Error al deleting session variable', e);
      return null;
    }
  }
}
