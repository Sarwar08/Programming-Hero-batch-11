
// object
const person = {
    name: 'abul',
    age: 10,
    friends: ['karim', 'hablu', 'bolod']
}

// array
// const person = ['abul', 'kala'];

console.log(person);
console.log(Array.isArray(person));

// Convert into JSON
const personStrigify = JSON.stringify(person);

console.log(personStrigify);
console.log(typeof personStrigify);

// revert back into object
const personParsed = JSON.parse(personStrigify);

console.log(personParsed);
console.log(typeof personParsed);
