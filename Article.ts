import { Product } from './Product';

export class Article implements Product{

    name:string;
    price:number;

    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }



    howMuchFor(quantity:number) {
        return this.price * quantity;
    }


}