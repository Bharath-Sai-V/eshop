import { Component } from '@angular/core';
import { ProductsDataService } from '../service/data/products-data.service';

export class Rating{

  constructor(
    public rate: number,
    public count: number
  ){}

}

export class Product{
  
  constructor(
    public id: number, 
    public title: string,
    public price: number,
    public description: string,
    public category: string,
    public image: string,
    public rating: Rating
  ){}

}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = []

  constructor(private productsService: ProductsDataService){}

  ngOnInit(){
    this.productsService.retriveAllProducts().subscribe(
      response => {
        console.log(response)
        this.products=response
      }
    )
  }
}
