import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategorys } from 'src/app/interfaces/ICategorys.interface';
import { CategoryService } from 'src/app/servicios/category/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent implements OnInit {
  categorysArray: ICategorys[] = [];

  category: ICategorys = {};

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData() {
    this.categoryService.getCategoryData().subscribe((categorys) => {
      console.log('Categorias -> ', categorys);
      this.categorysArray = categorys.categorias;
    });
  }

  getCategoryById(id: string) {
    this.categoryService.getCategoryFromId(id).subscribe((category) => {
      this.category = category;
      console.log('Categoria por id: ', category);
    });
  }

  editCategory(category: ICategorys) {
    this.categoryService.saveDataCategory(category)
    this.router.navigate(['admin/editCategory']);
  }

  deleteCategory(user: any) {
    this.categoryService.deleteCategory(user._id).subscribe((res) => {
      console.log(res);
      this.getCategoryData();
    });
  }

  navigateToNewCategory() {
    this.router.navigate(['admin/categoryForm']);
  }
}
