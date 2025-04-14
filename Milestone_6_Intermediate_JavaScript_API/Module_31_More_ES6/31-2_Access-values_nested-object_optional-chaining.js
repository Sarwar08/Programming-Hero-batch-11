
const personBabul = {
    name: 'babul',
    age: 20,
    friends: ['habyl', 'dkan', 'kabul', {name: 'kul'}],
    assets: {
        land: '4 shotok',
        car: 3,
        carNames: {
          "1st"  : 'bukhati',
        }
    }
}

// console.log(personBabul.assets?.home?.name);
// console.log(personBabul['friends'][3]['name']);
console.log(personBabul['assets']['carNames']['1st']);
