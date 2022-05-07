import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interfaces/IProducts.interface';
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
  producto:any;

  constructor(
    private productService: ProductosService,
    private personsService: PersonasService,
    private sessionStorage: SessionStorageService
  ) {
    this.xToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWM1ODRmNDZmM2M4ZTBhZjIzYWY4Y2QiLCJpYXQiOjE2NTE5MjExNTcsImV4cCI6MTY1MTkzNTU1N30.Hn-P6OdBDm3AWKY3dJ8KRn_njKGUqeubdQ3Mgc_cVKU';
  }

  ngOnInit(): void {

    this.sessionStorage.set('xToken',this.xToken)

    this.productService.getProductsData().subscribe((objects) => {
      console.log("productos -> ", objects)
      this.listProducts = objects.productos;
    });

    this.productService.getProductFromId('61d03a733dccc5c1a19cb63d').subscribe( (product) => {

      this.producto = product
      console.log("Producto por id: ", product)
    })

    // this.personsService.getPersonsData().subscribe((persons) => {
    //   console.log('Usuarios: ', persons);
    // });
  }
}
