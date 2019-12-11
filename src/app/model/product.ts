export class Product {
    name:string;
    price:number;
    image:string;
    sale:boolean=false;
    inCart:boolean=false;
    constructor(name:string,price:number,image:string){
        this.name=name;
        this.price=price;
        this.image=image;
    }
    changeCartStatus(){
        this.inCart=!this.inCart;
    }
    changeStatus(){
        this.sale=!this.sale;
    }
}
