import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  topAdmin: ITopSectionBanner = {
    banner: 'admin-image-background',
    title: 'Administración',
    subtitle: 'Home > Administración',
  };

  titleProductForm: ITitleSection = {
    title: 'Añadir nuevo producto',
    style: 'container-fluid p-3 text-center',
    styleTitle: 'rbt700 mt-3 mb-2',
    styleSubtitle: 'rbt300 font3 mt-3 mb-5',
  };

  productForm = new FormGroup({
    nombre: new FormControl(this.productService.productData.nombre, [
      Validators.required,
    ]),
    categoria: new FormControl(this.productService.productData.categoria?._id, [
      Validators.required,
    ]),
    precio: new FormControl(this.productService.productData.precio, [
      Validators.required,
    ]),
  });

  openModal: boolean = false;

  constructor(
    private productService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveProductData() {
    if (this.productForm.valid) {
      const product: IProduct = this.productForm.value;
      this.productService.createNewProduct(product).subscribe(
        (resp) => {
          console.log('La respuesta: ', resp);
          this.router.navigate(['/admin']);
        },
        (err) => {
          console.log('Error al crear el producto en la bbdd ', err);
        }
      );
    }
  }
}
