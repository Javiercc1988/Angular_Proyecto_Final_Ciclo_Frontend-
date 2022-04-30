import { Component, OnInit } from '@angular/core';
import { IDeliveryCards } from 'src/app/interfaces/IDeliveryCards.interface';

@Component({
  selector: 'app-delivery-cards',
  templateUrl: './delivery-cards.component.html',
  styleUrls: ['./delivery-cards.component.scss'],
})
export class DeliveryCardsComponent implements OnInit {
  datos: IDeliveryCards[] = [
    {
      icono: 'fa-solid fa-truck',
      titulo: 'Envio rápido y gratuito',
      descripcion: 'Compras superiores a 50€',
    },
    {
      icono: 'fa-solid fa-shield-halved',
      titulo: 'Pago Seguro',
      descripcion: 'Tus compras con tranquilidad',
    },
    {
      icono: 'fa-solid fa-arrow-rotate-left',
      titulo: 'Devolución gratuita',
      descripcion: 'Si tienes algún problema',
    },
    {
      icono: 'fa-solid fa-headset',
      titulo: 'Atención al cliente',
      descripcion: 'Atención personalizada',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.datos[0].icono);
  }
}
