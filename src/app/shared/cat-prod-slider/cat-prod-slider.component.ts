import { Component, Input, OnInit } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbSlideEventDirection,
} from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { IProductCarousel } from 'src/app/interfaces/IProductCarousel.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-cat-prod-slider',
  templateUrl: './cat-prod-slider.component.html',
  styleUrls: ['./cat-prod-slider.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CatProdSliderComponent implements OnInit {
  @Input() SlideConfig: IProductCarousel = {
    showNavigationArrows: true,
    showNavigationIndicators: true,
    keyboard: true,
    pauseOnHover: true,
    wrap: true,
    activeId: 'two',
    oneProduct: false,
  };

  slideData: any[] = [];

  constructor(private productService: ProductosService) {}

  ngOnInit(): void {
    this.productService
      .getProductsData()
      .pipe(first())
      .subscribe((res) => {
        res.productos.forEach((element: any, index: number) => {
          this.slideData.push(element.img);
        });
      });
  }
}
