import { Component, Input, OnInit } from '@angular/core';
import { IBackgroundStyle } from 'src/app/interfaces/IBackgroundStyle.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-top-section-banner',
  templateUrl: './top-section-banner.component.html',
  styleUrls: ['./top-section-banner.component.scss'],
})
export class TopSectionBannerComponent implements OnInit {
  @Input() topBanner: ITopSectionBanner = {
    banner: '',
    title: '',
    subtitle:''
  };

  constructor() {}

  ngOnInit(): void {}
}
