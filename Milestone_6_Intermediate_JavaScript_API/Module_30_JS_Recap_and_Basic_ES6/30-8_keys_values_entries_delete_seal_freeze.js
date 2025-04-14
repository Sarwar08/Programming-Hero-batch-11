
// object methods

const personAbul = {
    // key: value,
    name: 'abul',
    age: '10',
    country: 'bd',
    friends: ['kabul', 'habul'],
    work: {
        partTime: 'personal project',
        fullTime: 'big project'
    }
}

// Object seal
Object.seal(personAbul); // you can modify existing property but cannot add new property.

personAbul.age = 30;

// Object freeze
Object.freeze(personAbul); // you can modify existing property but cannot add new property.

personAbul.age = 40;


personAbul.status = 'Not Found'; 

// get object keys
console.log(Object.keys(personAbul));

// get object values
console.log(Object.values(personAbul));

// get object entries
console.log(Object.entries(personAbul));


