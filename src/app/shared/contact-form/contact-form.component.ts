import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContactDescription } from 'src/app/interfaces/IContactDescription.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactDescription: IContactDescription = {
    title: 'Contáctanos',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis cum inventore beatae voluptatibus quibusdam ab ducimus.',
    icons: [
      {
        icon: '<i class="fa-solid fa-location-dot"></i>',
        title: '¿Dónde estamos?',
        subtitle: 'Av. de la reina del norte, 46032, Valencia.',
      },
      {
        icon: '<i class="fa-solid fa-envelope-circle-check"></i>',
        title: 'Email',
        subtitle: 'contacto@contacto.com',
      },
      {
        icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
        title: 'Teléfono',
        subtitle: '(+34) 694 587 152',
      },
    ],
  };

  clientContact: any = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(9),
      Validators.pattern('^[0-9]{9}$'),
    ]),
    texto: new FormControl('', [
      Validators.required,
    ]),
  });

  get nombre() {
    return this.clientContact.get('nombre');
  }
  get email() {
    return this.clientContact.get('email');
  }
  get telefono() {
    return this.clientContact.get('telefono');
  }
  get texto() {
    return this.clientContact.get('texto');
  }

  constructor() {}

  ngOnInit(): void {
    this.clientContact.patchValue(this.clientContact);
  }
}
