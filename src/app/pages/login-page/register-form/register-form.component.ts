import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/interfaces/IUserLogin.interface';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';
import { UsersService } from 'src/app/servicios/users/users.service';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Output() changeRegister = new EventEmitter<boolean>();

  xToken: string = '';

  createNewUser: any = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    dni: new FormControl('', [
      Validators.required,
      Validators.maxLength(9),
      Validators.pattern(
        '((^)(((\\d{8})([-]?)([A-Za-z]))|([X-Zx-z]{1}[-]?\\d{7}[-]?[A-Za-z]{1})))+$'
      ),
      CustomValidators.checkDNI(),
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(9),
      Validators.pattern('^[0-9]{9}$'),
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get nombre() {
    return this.createNewUser.get('nombre');
  }
  get apellidos() {
    return this.createNewUser.get('apellidos');
  }
  get dni() {
    return this.createNewUser.get('dni');
  }
  get telefono() {
    return this.createNewUser.get('telefono');
  }
  get correo() {
    return this.createNewUser.get('correo');
  }
  get password() {
    return this.createNewUser.get('password');
  }

  constructor(
    private userService: UsersService,
    private router: Router,
    private authService: AuthService,
    private sessionStorage: SessionStorageService
  ) {}

  ngOnInit(): void {}

  createUser() {
    const userData: IUsers = {
      nombre: this.createNewUser.value.nombre,
      apellidos: this.createNewUser.value.apellidos,
      correo: this.createNewUser.value.correo,
      dni: this.createNewUser.value.dni,
      telefono: this.createNewUser.value.telefono,
      password: this.createNewUser.value.password,
    };

    this.userService.createNewUser(userData).subscribe((res) => {
      this.getLoginToken(userData.correo, userData.password);
    });
  }

  getLoginToken(correo: any, password: any) {
    const logginData: IUserLogin = {
      correo: correo,
      password: password,
    };

    this.authService.getLogin(logginData).subscribe((user) => {
      console.log('user', user);
      if (user.token) {
        this.xToken = user.token;
        this.setToken('xToken', this.xToken);
      }
      this.navigateToHome();
    });
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }

  register(emit: boolean) {
    this.changeRegister.emit(emit);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
