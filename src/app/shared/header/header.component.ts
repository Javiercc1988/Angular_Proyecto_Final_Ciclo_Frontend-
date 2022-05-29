import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  token: boolean = false;
  user: string = ''
  constructor(private sessionStorage: SessionStorageService) {}

  ngOnInit(): void {
    if (this.sessionStorage.get('xToken')) {
      this.token = true;
      this.user = this.sessionStorage.get('user')
    }
  }
}
