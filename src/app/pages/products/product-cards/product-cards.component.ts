import { Component, OnInit } from '@angular/core';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  listProducts: IProducts[] = [];
  producto: any;

  constructor(
    private productService: ProductosService,
  ) {}

  ngOnInit(): void {
    this.getDataProduct();
  }

  getDataProduct() {
    this.productService.getProductsData().subscribe((objects) => {
      console.log('productos -> ', objects);
      this.listProducts = objects.productos;
      console.log('listProducts -> ', this.listProducts);
    });
  }

  getProductById(id: string) {
    this.productService.getProductFromId(id).subscribe((product) => {
      this.producto = product;
      console.log('Producto por id: ', product);
    });
  }

  createProduct(product: IProducts) {
    console.log('metiendo producto nuevo');
    this.productService.createNewProduct(product).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }
}
