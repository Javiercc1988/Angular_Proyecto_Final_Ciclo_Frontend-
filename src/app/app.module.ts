import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { DeliveryCardsComponent } from './shared/delivery-cards/delivery-cards.component';
import { CatProdSliderComponent } from './shared/cat-prod-slider/cat-prod-slider.component';
import { InfoImageButtonComponent } from './shared/info-image-button/info-image-button.component';
import { ParallaxComponent } from './shared/parallax/parallax.component';
import { ShopButtonComponent } from './shared/shop-button/shop-button.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { TopSectionBannerComponent } from './shared/top-section-banner/top-section-banner.component';
import { PartnersComponent } from './shared/partners/partners.component';
import { TeamCardsComponent } from './pages/about-us/team-cards/team-cards.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TitleSectionComponent } from './shared/title-section/title-section.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { ProductCardsComponent } from './pages/products/product-cards/product-cards.component';
import { AdminComponent } from './pages/admin/admin.component';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    DeliveryCardsComponent,
    CatProdSliderComponent,
    InfoImageButtonComponent,
    ParallaxComponent,
    ShopButtonComponent,
    AboutUsComponent,
    HomeComponent,
    Page404Component,
    TopSectionBannerComponent,
    PartnersComponent,
    TeamCardsComponent,
    ContactComponent,
    TitleSectionComponent,
    ContactFormComponent,
    ProductsComponent,
    ProductCardsComponent,
    AdminComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [...interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
