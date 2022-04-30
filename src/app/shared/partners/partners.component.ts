import { Component, OnInit } from '@angular/core';
import { IPartners } from 'src/app/interfaces/IPartners.interface';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partnersList: IPartners[] = [
    {
      logo: '../../../assets/partners/member-3.png',
      name: 'Partner name',
    },
    {
      logo: '../../../assets/partners/member-3.png',
      name: 'Partner name',
    },
    {
      logo: '../../../assets/partners/member-3.png',
      name: 'Partner name',
    },
    {
      logo: '../../../assets/partners/member-3.png',
      name: 'Partner name',
    },
    {
      logo: '../../../assets/partners/member-3.png',
      name: 'Partner name',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
