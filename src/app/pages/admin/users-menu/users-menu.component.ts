import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/IUsers.interface';
import { UsersService } from 'src/app/servicios/users/users.service';

@Component({
  selector: 'app-users-menu',
  templateUrl: './users-menu.component.html',
  styleUrls: ['./users-menu.component.scss'],
})
export class UsersMenuComponent implements OnInit {
  usersArray: IUsers[] = [];
  user: IUsers = {};

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getDataUsers();
  }

  getDataUsers() {
    this.usersService.getUsersData().subscribe((users) => {
      console.log('usuarios -> ', users);
      this.usersArray = users.usuarios;
    });
  }

  getUserFromId(id: string) {
    this.usersService.getUsersFromId(id).subscribe((product) => {
      this.user = product;
      console.log('Producto por id: ', product);
    });
  }

  editUser(user: IUsers) {
    this.usersService.saveDataUser(user);
    this.usersService.readOnly = false;
    this.router.navigate(['admin/userForm']);
  }

  createUser(user: IUsers) {
    console.log('metiendo producto nuevo');
    this.usersService.createNewUser(user).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  deleteUser(user: any) {
    this.usersService.deleteUser(user.uid).subscribe((res) => {
      console.log(res);
      this.getDataUsers();
    });
  }

  infoUserReadOnly(user: IUsers) {
    this.usersService.saveDataUser(user);
    this.usersService.readOnly = true;
    this.router.navigate(['admin/userForm']);
  }
  
  navigateToNewUser() {
    this.usersService.userData = {};
    this.usersService.readOnly = false;
    this.router.navigate(['admin/userForm']);
  }
}
