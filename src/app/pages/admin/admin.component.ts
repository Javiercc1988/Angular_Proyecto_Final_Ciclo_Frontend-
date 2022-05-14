import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProductFormData } from 'src/app/interfaces/Forms/IProductFormData.interface';
import { IAdminCards } from 'src/app/interfaces/IAdminCards';
import { IProduct, IProducts } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

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

  sectionsData: IAdminCards[] = [
    {
      icono: 'fa-solid fa-truck',
      titulo: 'Usuarios',
      cantidad: 25,
    },
    {
      icono: 'fa-solid fa-shield-halved',
      titulo: 'Categorias',
      cantidad: 5,
    },
    {
      icono: 'fa-solid fa-arrow-rotate-left',
      titulo: 'Productos',
      cantidad: 28,
      seccion: 'products',
    },
  ];

  titleProductForm: ITitleSection = {
    title: 'Añadir nuevo producto',
    style: 'container-fluid p-3 text-center',
    styleTitle: 'rbt700 mt-3 mb-2',
    styleSubtitle: 'rbt300 font3 mt-3 mb-5',
  };

  productArray: IProducts[] = [];
  usersArray: any;
  categoryArray: any;

  seccion: string = '';

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

  onClickProduct(param: any) {
    if (param == 'products') {
      this.seccion = 'products';
      const data = this.getDataProduct();
    }
  }

  editProduct(data: IProducts) {
    this.productService.saveDataProduct(data);
    this.router.navigate(['/productForm']);
  }

  deleteProduct(data: any) {
    this.productService.deleteProduct(data._id).subscribe((res) => {
      console.log(res);
      this.getDataProduct();
    });
  }

  navigateTo(){
    this.router.navigate(['/productForm'])
  }
}
