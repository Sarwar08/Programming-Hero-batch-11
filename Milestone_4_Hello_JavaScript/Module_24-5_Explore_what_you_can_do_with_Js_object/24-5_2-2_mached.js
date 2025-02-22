
const products = [
    {id: 1, name: 'xiaomi phone one night', price: '19000'},
    {id: 2, name: 'iphone', price: '19000'},
    {id: 3, name: 'mac book air', price: '119000'},
    {id: 4, name: 'lenovo yoga laptop 2025', price: '19000'},
    {id: 5, name: 'Dell inspiron laptop', price: '19000'},
    {id: 6, name: 'Sammung phone note 7', price: '19000'},
    {id: 7, name: 'Nokia old age phone gone', price: '19000'},
    {id: 8, name: 'Phone one', price: '19000'},
]

// for (const product of products){
//     console.log(product);
// }

function matchedProducts (products, searchName){

    const matched = [];

    for (const product of products){
        // if(product.name.includes(searchName) === true){
        if(product.name.toLowerCase().includes(searchName.toLowerCase())){
            matched.push(product);
        }   
    }

    return matched;

}

const result = matchedProducts(products, 'phone');
console.log(result);
