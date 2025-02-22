
const phones = [
    {name: 'samsung', price: 20000, color: 'black'},
    {name: 'samsung', price: 10000, color: 'black'},
    {name: 'samsung', price: 105000, color: 'black'},
    {name: 'samsung', price: 20300, color: 'black'},
    {name: 'samsung', price: 22000, color: 'black'},
]

function getCheapestPhone (phones){

    let min = phones[0];
 
    for (const phone of phones){
        if (phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

console.log(getCheapestPhone(phones));
