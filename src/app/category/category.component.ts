import { Component } from '@angular/core';
import { ProductsDataService } from '../service/data/products-data.service';
import { Product } from '../product/product.component';
import { Router } from '@angular/router';

export class Category{

  constructor(public category:String){}

}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  categories: Category[] = []

  products: Product[] = []

  constructor(private productsService: ProductsDataService,
    private router: Router){}

  ngOnInit(){  
  this.productsService.retriveCategories().subscribe(
    response => {
      console.log(response)
      this.categories = response
    }
  )
  }

  getProductsByCategory(category: Category){
    this.router.navigate(['/products/category', category])
    this.productsService.retriveProductsByCategory(String(category)).subscribe(
      response => {
        console.log(response)
        this.products = response
      }
    )
  }

}



