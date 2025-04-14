
const number = '23';

// string, number, boolean

if (typeof number === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is not a number');
}

console.log(isNaN('2'));   // false
console.log(isNaN(56));    // false
console.log(isNaN('ab'));  // true