import { Component, OnInit } from '@angular/core';
import { IAdminCards } from 'src/app/interfaces/IAdminCards';
import { IProducts } from 'src/app/interfaces/IProducts.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { SessionStorageService } from 'src/app/servicios/session-storage/session-storage.service';

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

  xToken: string;

  datos: IAdminCards[] = [
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

  productArray: IProducts[] = [];
  usersArray: any;
  categoryArray: any;

  constructor(
    private sessionStorage: SessionStorageService,
    private productService: ProductosService
  ) {
    this.xToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWM1ODRmNDZmM2M4ZTBhZjIzYWY4Y2QiLCJpYXQiOjE2NTIxOTk5NjEsImV4cCI6MTY1MjIxNDM2MX0.yE0m-S-iJ9F2uQM-Rinp0HGMj_gkpExbGvfBO0Jcd3c';
  }

  ngOnInit(): void {
    this.setToken('xToken', this.xToken);
  }

  setToken(key: string, token: string) {
    this.sessionStorage.set(key, token);
  }

  getDataProduct() {
    this.productService.getProductsData().subscribe((objects) => {
      console.log('productos -> ', objects);
      this.productArray = objects.productos;
      console.log('listProducts -> ', this.productArray);
    });
  }

  onClickAdminCard(param:any) {
    if (param == 'products') {
      this.getDataProduct();
    }
  }

  // onClickProduct(idProduct)(){

  // }
}
