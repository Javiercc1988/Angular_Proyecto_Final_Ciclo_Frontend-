import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: 'about-us', component:AboutUsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: Page404Component },

    ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
