import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { IProducts } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { CategoryService } from 'src/app/servicios/category/category.service';
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

  productForm: any = new FormGroup({
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

  get nombre() {
    return this.productForm.get('nombre');
  }
  get categoria() {
    return this.productForm.get('categoria');
  }
  get precio() {
    return this.productForm.get('precio');
  }
  get descripcion() {
    return this.productForm.get('descripcion');
  }

  openModal: boolean = false;
  modalOptions = {};
  productData: any;
  isReadOnly: boolean = this.productService.readOnly;
  categoryData: ICategorys[] = [];
  listaCategorias: ICategorys[] = [];

  constructor(
    private productService: ProductosService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productData = this.productService.productData;

    this.categoryService.getCategoryData().subscribe((res) => {
      this.listaCategorias = res.categorias;

      console.log(this.listaCategorias);
    });
  }

  /**
   * Función para establecer el producto seleccionado, actualizar los datos modificados haciendo uso de la funcion editProduct() y navegar hasta admin haciendo uso de la funcion navigateToAdmin().
   */
  clickEditProduct() {
    if (this.productForm.valid) {
      let product = this.productForm.value;
      product._id = this.productData._id;
      this.editProduct(product);
    }
    this.navigateToAdmin();
  }

  editProduct(product: IProducts) {
    console.log(product);
    this.productService.editProduct(product).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  saveProductData() {
    if (this.productForm.valid) {
      const product: IProducts = this.productForm.value;

      this.productService.createNewProduct(product).subscribe((resp) => {
        console.log('La respuesta: ', resp);
      });
      this.navigateToAdmin();
    }
  }

  navigateToAdmin() {
    this.router.navigate(['admin']);
  }
}
