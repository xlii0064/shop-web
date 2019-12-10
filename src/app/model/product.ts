export class Product {
    name:string;
    price:number;
    image:string;
    sale:boolean=false;
    constructor(name:string,price:number,image:string){
        this.name=name;
        this.price=price;
        this.image=image;
    }

    changeStatus(){
        this.sale=!this.sale;
    }
}
