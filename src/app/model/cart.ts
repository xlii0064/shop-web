import { Product } from './product';

export class Cart {
    product:Product;
    amount:number=0;

    constructor(product:Product){
        this.product=product;
    }

    add(){this.amount++;}
    minus(){this.amount--;}
}
