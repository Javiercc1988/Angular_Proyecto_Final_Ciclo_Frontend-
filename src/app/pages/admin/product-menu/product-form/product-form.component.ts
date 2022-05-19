import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { ImagesService } from 'src/app/servicios/images/images.service';
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
  modalOptions = {};

  constructor(
    private productService: ProductosService,
    private router: Router,
    private imageService: ImagesService
  ) {}

  ngOnInit(): void {}

  saveProductData() {
    if (this.productForm.valid) {
      const product: IProducts = this.productForm.value;

      this.productService.createNewProduct(product).subscribe((resp) => {
        console.log('La respuesta: ', resp);
        this.router.navigate(['/admin']);
      });
    }
  }
}
