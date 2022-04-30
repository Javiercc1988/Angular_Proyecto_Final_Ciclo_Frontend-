import { Component, OnInit } from '@angular/core';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  top404:ITopSectionBanner = {
    banner:'p404-image-background',
    title: "Sorry :'(",
    subtitle: 'Home > 404 not found'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
