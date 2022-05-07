import { Component, OnInit } from '@angular/core';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { PersonasService } from 'src/app/servicios/personas/personas.service';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  listProducts: IProducts[] = [];
  xToken: string;
  producto: any;

  nuevoProducto: IProduct = {
    nombre: '1111asdasda',
    categoria: '61cc252dbe7a105479aa80e4',
    precio: 2.25,
  };

  constructor(
    private productService: ProductosService,
    private personsService: PersonasService,
    private sessionStorage: SessionStorageService
  ) {
    this.xToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWM1ODRmNDZmM2M4ZTBhZjIzYWY4Y2QiLCJpYXQiOjE2NTE5MzY4NTEsImV4cCI6MTY1MTk1MTI1MX0.OLU0igFzMi7NbOf8DOob-UTIhzc6J5q6uIihNMhxyUY';
  }

  ngOnInit(): void {
    this.setToken('xToken', this.xToken);
    this.createProduct(this.nuevoProducto)
    // this.getDataProduct();
    this.getProductById("6276963da0dd0fb6e09b023b");
    this.getPersonsData();
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }

  getDataProduct() {
    this.productService.getProductsData().subscribe((objects) => {
      console.log('productos -> ', objects);
      this.listProducts = objects.productos;
    });
  }

  getProductById(id: string) {
    this.productService.getProductFromId(id).subscribe((product) => {
      this.producto = product;
      console.log('Producto por id: ', product);
    });
  }

  createProduct(product: IProduct) {
    console.log("metiendo producto nuevo")
      this.productService.createNewProduct(product);
  }

  getPersonsData() {
    this.personsService.getPersonsData().subscribe((persons) => {
      console.log('Usuarios: ', persons);
    });
  }
}
