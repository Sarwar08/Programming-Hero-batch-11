
const students = {
    name: 'sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['apu', 'raj', 'abul', 'kabul'],
    movies: [{name: 'no 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function (){
        console.log('acting like sakib khan');
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        made: 2025,
        manufacturer: {
            name: 'tesla coy',
            ceo: 'elon mask',
            country: 'USA'
        }
    }
}

console.log(students);
console.log(students.friends);
console.log(students.car);
console.log(students.act);
students.act();
