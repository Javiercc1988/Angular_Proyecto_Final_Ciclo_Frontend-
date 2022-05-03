import { Component, OnInit } from '@angular/core';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  topContact: ITopSectionBanner = {
    banner: 'contact-image-background',
    title: 'Contacto',
    subtitle: 'Home > Contacto'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
