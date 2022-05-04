import { Component, Input, OnInit } from '@angular/core';
import { IContactDescription } from 'src/app/interfaces/IContactDescription.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

@Input() contactDescription: IContactDescription = {
  title : 'Contáctanos',
  subTitle : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis cum inventore beatae voluptatibus quibusdam ab ducimus.',
  icons : [
    {
      icon : '<i class="fa-solid fa-location-dot"></i>',
      title : '¿Dónde estamos?',
      subtitle : 'Av. de la reina del norte, 46032, Valencia.'
    },
    {
      icon : '<i class="fa-solid fa-envelope-circle-check"></i>',
      title : 'Email',
      subtitle : 'contacto@contacto.com',
    },
    {
      icon : '<i class="fa-solid fa-mobile-screen-button"></i>',
      title : 'Teléfono',
      subtitle : '(+34) 694 587 152',
    }
  ]
}

  constructor() { }

  ngOnInit(): void {
  }

}
