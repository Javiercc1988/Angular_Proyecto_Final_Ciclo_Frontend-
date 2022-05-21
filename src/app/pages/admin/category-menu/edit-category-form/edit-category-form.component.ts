import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { CategoryService } from 'src/app/servicios/category/category.service';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss']
})
export class EditCategoryFormComponent implements OnInit {
  topAdmin: ITopSectionBanner = {
    banner: 'admin-image-background',
    title: 'Administración',
    subtitle: 'Home > Administración',
  };

  titleProductForm: ITitleSection = {
    title: 'Añadir nueva categoría',
    style: 'container-fluid p-3 text-center',
    styleTitle: 'rbt700 mt-3 mb-2',
    styleSubtitle: 'rbt300 font3 mt-3 mb-5',
  };
  
  categoryForm = new FormGroup({
    nombre: new FormControl(this.categoryService.categoryData.nombre, [Validators.required]),
  });

  get nombre() {
    return this.categoryForm.get('nombre');
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  clickEditCategory() {
    if (this.categoryForm.valid) {
      let category = this.categoryService.categoryData
      category.nombre = this.categoryForm.value.nombre
      this.editCategory(category)
    }
  }

  editCategory(category: ICategorys) {
    console.log('metiendo categoria nueva');
    this.categoryService.editCategory(category).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  navigateToAdmin() {
    this.router.navigate(['admin']);
  }

}
