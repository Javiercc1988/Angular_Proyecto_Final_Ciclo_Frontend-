import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CategoryFormComponent } from './pages/admin/category-menu/category-form/category-form.component';
import { ProductFormComponent } from './pages/admin/product-menu/product-form/product-form.component';
import { UserFormComponent } from './pages/admin/users-menu/user-form/user-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProductsComponent } from './pages/products/products.component';
import { AuthGuard } from './servicios/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'admin/productForm', component: ProductFormComponent, canActivate: [AuthGuard]  },
  { path: 'admin/categoryForm', component: CategoryFormComponent, canActivate: [AuthGuard]  },
  { path: 'admin/userForm', component: UserFormComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
