
const country = 'bangla';
const country1 = "bangla";
const country2 = `bangla`;
// const country3 = new String('bangla'); // kom use hoy

console.log(country.length);
console.log(country[0]);

// string is immutable. Can not change. Not changable.

const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()){
    console.log('same same');
}
else {
    console.log('not same');
}

const drink = ' Water';
const liquid = '  water';

if (drink.trim().toLowerCase() === liquid.trim().toLowerCase()){
    console.log('same');
}
else{
    console.log('not same');
}
