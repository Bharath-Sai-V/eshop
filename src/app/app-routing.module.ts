import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'home', component : HomeComponent },
  { path : 'products', component : ProductComponent },
  { path : 'products/category', component : CategoryComponent },
  { path : 'products/category/:category', component : CategoryComponent },
  { path : '**', component : ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
