/*
    vat rate = 7.5%
*/

function calculateVat (price){
    if ( typeof (price) === "string" || price < 0){
        return "Invalid";
    }
    else{
        const vatRate = 7.5;
        const vat = price * (vatRate/100)
        return vat;
    }
}

console.log(calculateVat(0));
