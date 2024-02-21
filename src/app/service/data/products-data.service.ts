import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/product.component';
import { Category} from 'src/app/category/category.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) { }

retriveAllProducts(){
  return this.http.get<Product[]>(`http://localhost:8080/products`)
}

retriveCategories(){
  return this.http.get<Category[]>(`http://localhost:8080/products/category`)
}

retriveProductsByCategory(category: String){
  return this.http.get<Product[]>(`http://localhost:8080/products/category/${category}`)
}

}
