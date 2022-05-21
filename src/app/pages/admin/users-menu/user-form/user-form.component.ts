import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { UsersService } from 'src/app/servicios/users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  topAdmin: ITopSectionBanner = {
    banner: 'admin-image-background',
    title: 'Administración',
    subtitle: 'Home > Administración',
  };

  titleProductForm: ITitleSection = {
    title: 'Añadir nueva categoría',
    style: 'container-fluid p-3 text-center',
    styleTitle: 'rbt700 mt-3 mb-2',
    styleSubtitle: 'rbt300 font3 mt-3 mb-5',
  };

  userForm: any = new FormGroup({
    nombre: new FormControl(this.userService.userData.nombre, [Validators.required]),
    apellidos: new FormControl(this.userService.userData.apellidos, [Validators.required]),
    dni: new FormControl(this.userService.userData.dni, [Validators.required]),
    telefono: new FormControl(this.userService.userData.telefono, [Validators.required]),
    correo: new FormControl(this.userService.userData.correo, [Validators.required]),
    password: new FormControl(this.userService.userData.password, [Validators.required]),
    rol: new FormControl(this.userService.userData.rol, [Validators.required]),
  });

  get nombre() {
    return this.userForm.get('nombre');
  }
  get apellidos() {
    return this.userForm.get('apellidos');
  }
  get dni() {
    return this.userForm.get('dni');
  }
  get telefono() {
    return this.userForm.get('telefono');
  }
  get correo() {
    return this.userForm.get('correo');
  }
  get password() {
    return this.userForm.get('password');
  }
  get rol() {
    return this.userForm.get('rol');
  }


  userData: any;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userData = this.userService.userData;

  }

  clickEditUser() {
    if (this.userForm.valid) {
      let User = this.userForm.value;
      User.uid = this.userService.userData.uid;
      this.editUser(User);
    }
  }

  editUser(user: IUsers) {
    console.log('metiendo al usuario editado', user);
    this.userService.editUser(user).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  saveUserData() {
    if (this.userForm.valid) {
      const user: IUsers = this.userForm.value;

      this.userService.createNewUser(user).subscribe((resp) => {
        console.log('La respuesta: ', resp);
        this.router.navigate(['/admin']);
      });
    }
  }
}
