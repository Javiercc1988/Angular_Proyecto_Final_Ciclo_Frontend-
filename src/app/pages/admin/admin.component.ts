import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IProductFormData } from 'src/app/interfaces/Forms/IProductFormData.interface';
import { IAdminCards } from 'src/app/interfaces/IAdminCards';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { CategoryService } from 'src/app/servicios/category/category.service';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { UsersService } from 'src/app/servicios/users/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  topAdmin: ITopSectionBanner = {
    banner: 'admin-image-background',
    title: 'Administración',
    subtitle: 'Home > Administración',
  };

  sectionsData: IAdminCards[] = [];

  titleProductForm: ITitleSection = {
    title: 'Añadir nuevo producto',
    style: 'container-fluid p-3 text-center',
    styleTitle: 'rbt700 mt-3 mb-2',
    styleSubtitle: 'rbt300 font3 mt-3 mb-5',
  };

  seccion: string = '';

  usersLength: any;
  productsLength: any;
  categorysLength: any;

  constructor(
    private productService: ProductosService,
    private usersService: UsersService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.multipleHttpRequestSync();
  }

  /**
   * Función para realizar de forma paralela y obtener una respuesta sincronizada en peticiones http 
   */
  multipleHttpRequestSync() {
    forkJoin([
      this.productService.getProductsData(),
      this.usersService.getUsersData(),
      this.categoryService.getCategoryData(),
    ]).subscribe((res) => {
      this.productsLength = res[0].total;
      this.usersLength = res[1].total;
      this.categorysLength = res[2].total;
      this.setInfoCards();
    });
  }

  /**
   * Función que introduce la información de las tarjetas de información
   */
  setInfoCards() {
    this.sectionsData.push(
      {
        icono: 'fa-solid fa-truck',
        titulo: 'Usuarios',
        cantidad: this.usersLength,
        seccion: 'users',
      },
      {
        icono: 'fa-solid fa-shield-halved',
        titulo: 'Categorias',
        cantidad: this.categorysLength,
        seccion: 'categorys',
      },
      {
        icono: 'fa-solid fa-arrow-rotate-left',
        titulo: 'Productos',
        cantidad: this.productsLength,
        seccion: 'products',
      }
    );
  }

  /**
   * Función onclick que modifica el parametro sección con el parámetro recibido.
   * @param param 
   */
  onClickProduct(param: any) {
    if (param) {
      this.seccion = param;
    }
  }
}
