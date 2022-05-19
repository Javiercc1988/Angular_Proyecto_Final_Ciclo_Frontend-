import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from 'src/app/interfaces/IUserLogin.interface';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  xToken: string = '';
  loginUser = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private sessionStorage: SessionStorageService
  ) {}

  ngOnInit(): void {}

  getLoginToken() {
    const logginData: IUserLogin = {
      correo: this.loginUser.value.correo,
      password: this.loginUser.value.password,
    };

    this.authService.getLogin(logginData).subscribe((res) => {
      console.log('res', res);
      this.xToken = res.token;
      this.setToken('xToken', this.xToken);
    });
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }
}
