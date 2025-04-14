
class Product {
    // attribute
    // malik = 'sarwar';

    // constructor
    constructor(name, price, brand, malik){
        // console.log(name, price, brand);
        this.malik = malik;
        this.name = name;
        this.price = price;
        this.brand = brand;
        
    }

    // method
    details(){
        console.log('ami details', this.name);
    }
}

const iphone = new Product('iphone', 1234, 'apple', 'malik');

console.log(iphone);

iphone.details();

const redmi = new Product('redmi phone', 1222, 'xiomi', 'ami nije');

console.log(redmi);
redmi.details();


