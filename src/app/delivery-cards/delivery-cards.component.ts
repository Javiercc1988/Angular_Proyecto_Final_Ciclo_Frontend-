import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-cards',
  templateUrl: './delivery-cards.component.html',
  styleUrls: ['./delivery-cards.component.scss'],
})
export class DeliveryCardsComponent implements OnInit {
  datos: any = [
    {
      icono: 'fa-solid fa-truck',
      titulo: 'dasdada',
      descripcion: 'dasdad',
    },
    {
      icono: 'fa-solid fa-truck',
      titulo: 'dasdada',
      descripcion: 'dasdad',
    },
    {
      icono: 'fa-solid fa-truck',
      titulo: 'dasdada',
      descripcion: 'dasdad',
    },
    {
      icono: 'fa-solid fa-truck',
      titulo: 'dasdada',
      descripcion: 'dasdad',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.datos[0].icono);
  }
}
