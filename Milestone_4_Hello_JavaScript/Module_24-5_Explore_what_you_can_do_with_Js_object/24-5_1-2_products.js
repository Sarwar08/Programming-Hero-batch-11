const products = [
    {name: 'phone', price: 12000},
    {name: 'laptop', price: 32000},
]

console.log(
    products[0]
);

function add (num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
    
}

add(12, 13, 14, 15, 45, 56);