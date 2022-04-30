import { Component, OnInit } from '@angular/core';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  topAboutUs: ITopSectionBanner = {
    banner: 'aboutUs-image-background',
    title: 'Nosotros',
    subtitle: 'Home > Nosotros'
  };
  constructor() {}

  ngOnInit(): void {}
}
