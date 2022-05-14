import { Component, OnInit } from '@angular/core';
import { IUserLogin } from 'src/app/interfaces/IUserLogin.interface';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  //////////////////////////////////////
  xToken: string = '';
  provisionalLogin: IUserLogin = {
    correo: 'usuario1@correo.com',
    password: '123456',
  };
  //////////////////////////////////////

  constructor(
    private sessionStorage: SessionStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getLoginToken(this.provisionalLogin);
  }

  getLoginToken(login: IUserLogin) {
    console.log('getlogin');
    this.authService.getLogin(login).subscribe((res) => {
      this.xToken = res.token;
      this.setToken('xToken', this.xToken);
    });
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }
}
