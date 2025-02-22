
const desh = 'bangladesh';

const part = desh.slice(3, 7);

console.log(part);

const bakko = 'I am good and hardworking person.';

console.log(bakko.split(' ')); // space used to make an array of words
// [ 'I', 'am', 'good', 'and', 'hardworking', 'person.' ]

console.log(bakko.split('a'));

const fName = 'abul';
const lName = 'babul';

const fullName = fName.concat(' ' + lName);
const fullName2 = fName.concat(' and').concat(' ' + lName);

console.log(fullName);
console.log(fullName2); 

console.log(fullName2.includes('d')); // true





