
const products = [
    {name: 'shampoo', price: 300},
    {name: 'soap', price: 100},
    {name: 'khata', price: 250},
    {name: 'book', price: 400},
]

function calcTotal (products){
    console.log(products);

    let totalPrice = 0;
    for (const product of products){
        console.log(product);
        totalPrice += product.price;
    }

    return totalPrice;
}

const result = calcTotal(products);

console.log(result);

