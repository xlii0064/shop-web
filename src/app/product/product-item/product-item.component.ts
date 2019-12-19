import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  public products:Array<Product>=[];
  public cart:Array<Cart>=[];
  constructor() { }
 
  ngOnInit() {
    this.products.push(new Product("uniform1",100,"https://img.sankengriji.com/jkuniform/upload/jp/a6f4b8914609c5c2ffd29e5de49220e0.jpg"));
    this.products.push(new Product("uniform2",101,"https://img.sankengriji.com/jkuniform/upload/jp/6e8e7022f75e0e248b8864b055d9c79a.jpg"));
    this.products[1].changeStatus();
  }
  add(index:number){
    this.cart[index].add();
  }
  totalPrice():number{
    var num=0;
    for (var i in this.cart){
      num+=this.cart[i].product.price*this.cart[i].amount;
    }
    return num;
  }

  addToCart(index:number){
    this.products[index].changeCartStatus();
    this.cart.push(new Cart(this.products[index]));
  }
  search(name:string):string{
    for (var i in this.products){
      if (this.products[i].name==name){
        return i;
      }
    }
    return "-1";
  }
  minus(index:number){
    if(this.cart[index].amount==1){
      var i=this.search(this.cart[index].product.name);
      this.products[i].changeCartStatus();
      this.cart.splice(index,index+1);
    }
    else{ this.cart[index].minus();}
  }



}
