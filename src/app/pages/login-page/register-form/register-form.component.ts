import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { UsersService } from 'src/app/servicios/users/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  @Output() changeRegister = new EventEmitter<boolean>()


  createNewUser = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UsersService,
    private router:Router) {}

  ngOnInit(): void {}

  createUser() {
    const userData: IUsers = {
      nombre: this.createNewUser.value.nombre,
      apellidos: this.createNewUser.value.apellidos,
      correo: this.createNewUser.value.correo,
      dni: this.createNewUser.value.dni,
      password: this.createNewUser.value.password,
    };
    console.log('USER DATAAAAAAAAAAAAAAAAAAAAAAA: ', userData);

    this.userService.createNewUser(userData).subscribe((res) => {
      console.log('La respuesta: ', res);
    });
  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

  register(emit:boolean){
    this.changeRegister.emit(emit)
  }
}
