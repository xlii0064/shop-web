import { Product } from './product';

export class Cart {
    product:Product;
    amount:number=1;

    constructor(product:Product){
        this.product=product;
    }

    add(){this.amount++;}
    minus(){this.amount>0 ? this.amount--:this.amount=0;}
}
