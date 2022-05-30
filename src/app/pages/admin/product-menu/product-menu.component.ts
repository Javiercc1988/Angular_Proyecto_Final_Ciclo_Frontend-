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

  salir: boolean = false;

  data: any;

  constructor(
    private productService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataProduct();
  }

  getDataProduct() {
    this.productService.getProductsData().subscribe((objects) => {
      this.productArray = objects.productos;
    });
  }

  editProduct(product: IProducts) {
    this.productService.saveDataProduct(product);
    this.productService.readOnly = false;
    this.router.navigate(['/admin/productForm']);
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product._id).subscribe((product) => {
      console.log(product);
      this.getDataProduct();
    });
  }

  /**
   * Función para establecer en modo readOnly el formulario y evitar que el usuario pueda modificarlo.
   * @param product
   */
  infoProductReadOnly(product: IProducts) {
    this.productService.saveDataProduct(product);
    this.productService.readOnly = true;
    this.router.navigate(['admin/productForm']);
  }

  /**
   * Función para cambiar eliminar el modo readOnly en caso de que estuviese establecido, vaciar los datos del servicio usuarios, y navegar a la siguiente página.
   */
  navigateTo() {
    this.productService.productData = {};
    this.productService.readOnly = false;
    this.router.navigate(['/admin/productForm']);
  }
}
