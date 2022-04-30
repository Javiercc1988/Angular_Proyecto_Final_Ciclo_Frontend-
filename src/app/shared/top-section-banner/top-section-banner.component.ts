import { Component, Input, OnInit } from '@angular/core';
import { backgroundStyle } from 'src/app/interfaces/backgroundStyle.interface';

@Component({
  selector: 'app-top-section-banner',
  templateUrl: './top-section-banner.component.html',
  styleUrls: ['./top-section-banner.component.scss'],
})
export class TopSectionBannerComponent implements OnInit {
  @Input() clase: backgroundStyle = {
    backgroundStyle: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
