import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public products:Array<Product>=[];
  constructor() { }
 
  ngOnInit() {
    this.products.push(new Product("uniform1",100,"/assets/1.jpg"));
  }


}
