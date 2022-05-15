import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductFormComponent } from './pages/admin/product-menu/product-form/product-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'productForm', component: ProductFormComponent },
      { path: 'login', component: LoginPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
