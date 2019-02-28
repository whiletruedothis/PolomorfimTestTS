export interface Product {
    name:string;
    price:number;
    howMuchFor(quantity:number):any;
}

