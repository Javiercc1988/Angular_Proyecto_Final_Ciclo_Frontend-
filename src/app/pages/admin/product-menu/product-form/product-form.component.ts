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
    descripcion: new FormControl(this.productService.productData.descripcion, [
      Validators.required,
    ]),
  });

  openModal: boolean = false;
  modalOptions = {};

  productData: any;

  constructor(
    private productService: ProductosService,
    private router: Router,
    private imageService: ImagesService
  ) {}

  ngOnInit(): void {
    this.productData = this.productService.productData;
    console.log('LA DATAAAAAAAAAAAA', this.productData);
  }

  clickEditProduct() {
    if (this.productForm.valid) {
      let product = this.productForm.value;
      product._id = this.productData._id;
      this.editProduct(product);
    }
    this.navigateToAdmin()
  }

  editProduct(product: IProducts) {
    console.log('metiendo al usuario editado', product);
    this.productService.editProduct(product).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  saveProductData() {
    if (this.productForm.valid) {
      const product: IProducts = this.productForm.value;

      this.productService.createNewProduct(product).subscribe((resp) => {
        console.log('La respuesta: ', resp);
        this.router.navigate(['/admin']);
      });
    }
  }

  navigateToAdmin() {
    this.router.navigate(['admin']);
  }
}
