import { Component, OnInit } from '@angular/core';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { PersonasService } from 'src/app/servicios/personas/personas.service';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
})
export class ProductCardsComponent implements OnInit {
  listProducts: IProducts[] = [];
  producto:any;

  nuevoProducto: IProduct = {
    nombre: "PRUEBA213123 CORPS VIP",
    categoria: '627695e3a0dd0fb6e09b0237',
    precio: 10.75
  };

  constructor(
    private productService: ProductosService,
    private personsService: PersonasService,
  ) {
  }

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

  createProduct(product: IProduct) {
    console.log('metiendo producto nuevo');
    this.productService.createNewProduct(product).subscribe((res)=>{
      console.log("la respuesta", res)
    });
  }

  getPersonsData() {
    this.personsService.getPersonsData().subscribe((persons) => {
      console.log('Usuarios: ', persons);
    });
  }
}
