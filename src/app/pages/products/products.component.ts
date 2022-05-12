import { Component, OnInit } from '@angular/core';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  topProducts: ITopSectionBanner = {
    banner: 'products-image-background',
    title: 'Productos',
    subtitle: 'Home > Productos',
  };

  constructor() {}

  ngOnInit(): void {}
}
