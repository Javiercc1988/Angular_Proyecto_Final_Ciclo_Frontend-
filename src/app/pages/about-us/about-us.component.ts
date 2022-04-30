import { Component, OnInit } from '@angular/core';
import { backgroundStyle } from 'src/app/interfaces/backgroundStyle.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  topBackgroundImage:backgroundStyle = {
    backgroundStyle: 'aboutUs-image-background'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
