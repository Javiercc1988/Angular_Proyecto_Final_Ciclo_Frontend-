import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { DeliveryCardsComponent } from './delivery-cards/delivery-cards.component';
import { CatProdSliderComponent } from './cat-prod-slider/cat-prod-slider.component';
import { InfoImageButtonComponent } from './info-image-button/info-image-button.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ShopButtonComponent } from './shared/shop-button/shop-button.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
