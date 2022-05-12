import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/IProducts.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  
  topAdmin: ITopSectionBanner = {
    banner: 'admin-image-background',
    title: 'Administración',
    subtitle: 'Home > Administración',
  };

  titleProductForm:ITitleSection = {
    title: 'Gestión de productos',
    style: 'container-fluid p-3 text-center',
    styleTitle:'rbt700 mt-3 mb-2',
    styleSubtitle:'rbt300 font3 mt-3 mb-5',
  }



  productForm = new FormGroup({
    nombre: new FormControl([Validators.required]),
    categoria: new FormControl([Validators.required]),
    precio: new FormControl([Validators.required])
  })

  constructor(
    private productService: ProductosService,

  ) { }

  ngOnInit(): void {
  }


  saveProductData(){
    console.log("hola")
    if(this.productForm.valid){
      console.log("hola2")
      const product:IProduct = this.productForm.value

      console.log("product", product)   

      this.productService.createNewProduct(JSON.parse(JSON.stringify(product))).subscribe((resp)=>{
        console.log(resp)
      });
    }
  }

}
