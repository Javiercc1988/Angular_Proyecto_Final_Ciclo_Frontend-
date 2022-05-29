import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { UsersService } from 'src/app/servicios/users/users.service';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Output() changeRegister = new EventEmitter<boolean>();

  createNewUser:any = new FormGroup({
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

  constructor(private userService: UsersService, private router: Router) {}

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
    console.log('USER DATAAAAAAAAAAAAAAAAAAAAAAA: ', userData);

    this.userService.createNewUser(userData).subscribe((res) => {
      console.log('La respuesta: ', res);
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  register(emit: boolean) {
    this.changeRegister.emit(emit);
  }
}
