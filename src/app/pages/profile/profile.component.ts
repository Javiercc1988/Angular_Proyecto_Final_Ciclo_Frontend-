import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: string = ''
  constructor(
    private sessionStorage: SessionStorageService,
    private router: Router) {}

  ngOnInit(): void {
    if (this.sessionStorage.get('xToken')) {
      this.user = this.sessionStorage.get('user')
    }
  }

  /**
   * Función para cerrar la sesión del usuario.
   */
  logout(){
    this.sessionStorage.deleteItemInStorage('user')
    this.sessionStorage.deleteItemInStorage('xToken')
    this.router.navigate(['/home'])
  }

}
