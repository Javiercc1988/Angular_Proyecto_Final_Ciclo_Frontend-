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
      console.log('productos -> ', objects);
      this.productArray = objects.productos;
      console.log('listProducts -> ', this.productArray);
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

  infoProductReadOnly(product:IProducts){
    this.productService.saveDataProduct(product);
    this.productService.readOnly = true;
    this.router.navigate(['admin/productForm']);
  }
  
  navigateTo() {
    this.productService.productData = {}
    this.productService.readOnly = false;
    this.router.navigate(['/admin/productForm']);
  }
}
