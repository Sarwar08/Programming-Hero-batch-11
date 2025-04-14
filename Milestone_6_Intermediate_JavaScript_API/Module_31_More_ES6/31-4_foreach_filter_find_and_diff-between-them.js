
const products = [
    {id: 1, name: 'iphone', color: 'black', price: 1200, brand: 'apple'},
    {id: 2, name: 'xiaomi', color: 'gold', price: 200, brand: 'xiaomi'},
    {id: 3, name: 'samsung', color: 'black', price: 100, brand: 'samsung'},
    {id: 4, name: 'iphone', color: 'black', price: 1100, brand: 'apple'},
]

// foreach does not return anything

products.forEach(product => {
    if (product.color === 'gold'){
        // console.log(product);
    }
});

// filter returns array
const filterArray = products.filter(product => {
    return product.price > 1000 && product.color === 'gold';
});

console.log(filterArray); 

// filter returns array
// If does not match any condition returns empty array

// find
// const findArr = products.find(p => p.id === 4);
const findArr = products.find(p => p.color === 'gold');
console.log(findArr);

// find returns object
// if does not match any condition returns undefined

