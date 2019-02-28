
export class Sail {
    listOfProducts:any;


    constructor(listsOfProducts:any){
        this.listOfProducts = listsOfProducts;
    }

    getTotal(){
        let total = 0;

        if(this.listOfProducts != []){
            for (let product of this.listOfProducts) {
                total = total +  product.price;
            }   
        }
        return total;
    }
    
}