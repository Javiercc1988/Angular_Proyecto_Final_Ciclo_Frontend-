import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/IProducts.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.scss'],
})
export class ProductMenuComponent implements OnInit {
  productArray: IProducts[] = [];

  salir:boolean = false;

  constructor(
    private productService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataProduct();
  }

  getDataProduct() {
    this.productService.getProductsData().subscribe((objects) => {
      console.log('productos -> ', objects);
      this.productArray = objects.productos;
      console.log('listProducts -> ', this.productArray);
    });
  }

  editProduct(data: IProducts) {
    this.productService.saveDataProduct(data);
    this.router.navigate(['/productForm']);
  }

  deleteProduct(data: any) {
    this.productService.deleteProduct(data._id).subscribe((res) => {
      console.log(res);
      this.getDataProduct();
    });
  }

  navigateTo() {
    this.router.navigate(['/productForm']);
  }
}
