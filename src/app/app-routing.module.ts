import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'about-us', component:AboutUsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}

    ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
