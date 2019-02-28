import { Product } from './Product';

export class Service implements Product{
    name:string;
    price:number;


    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    }



}