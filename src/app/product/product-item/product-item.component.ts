import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public products:Array<Product>=[];
  public cart:Array<Cart>=[];
  constructor() { }
 
  ngOnInit() {
    this.products.push(new Product("uniform1",100,"/assets/1.jpg"));
    this.products.push(new Product("uniform2",101,"/assets/2.jpg"));
  }
  add(index:number){
    this.cart[index].add();
  }

  addToCart(index:number){
    this.products[index].changeCartStatus();
    this.cart.push(new Cart(this.products[index]));
  }

  minus(index:number){
    this.cart[index].minus();
  }



}
