
const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']

const sortPersons = persons.sort();

console.log(sortPersons);


// sort

const numbers = [4, 7, 2, 8, 13, 6];

// ascending
const numbers_asc = [...numbers].sort(function(a, b){return a - b});

// descending
const numbers_dsc = [...numbers].sort(function(a, b){return b - a});

console.log(numbers_asc);
console.log(numbers_dsc);


