import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';
import { CategoryService } from 'src/app/servicios/category/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
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
    nombre: new FormControl('', [Validators.required]),
  });

  get nombre() {
    return this.categoryForm.get('nombre');
  }

  newCategory: ICategorys = {};

  categoryData: ICategorys = {}

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {  }

  clickCreateCategory() {
    if (this.categoryForm.valid) {
      this.newCategory = this.categoryForm.value;
      this.createCategory(this.newCategory);
      this.navigateToAdmin();
    }
  }

  createCategory(category: ICategorys) {
    console.log('metiendo categoria nueva');
    this.categoryService.createNewCategory(category).subscribe((res) => {
      console.log('la respuesta', res);
    });
  }

  navigateToAdmin() {
    this.router.navigate(['admin']);
  }
}
