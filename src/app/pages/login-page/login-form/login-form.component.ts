import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private sessionStorage: SessionStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  getLoginToken() {
    const logginData: IUserLogin = {
      correo: this.loginUser.value.correo,
      password: this.loginUser.value.password,
    };

    this.authService.getLogin(logginData).subscribe((user) => {
      console.log('user', user);
      if(user.token){
        this.xToken = user.token;
        this.setToken('xToken', this.xToken);
      }
      this.navigateToHome()
    });
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

  logout(){
    this.sessionStorage.deleteItemInStorage('xToken')
    this.navigateToHome()
  }
}
