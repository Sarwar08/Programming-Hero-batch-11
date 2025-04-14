
const friends = ['abul', 'kabul', 'babul'];

// 3 way to make a new array

// using very conventional way
const newArr1 = [];

for (let i = 0; i < friends.length; i++){
    newArr1.push(friends[i]);
}
console.log('newArr1 using conventional for loop: ',newArr1);

// using JS for of 
const newArr2 = [];

for (const friend of friends){
    newArr2.push(friend);
}

console.log('newArr2 using for of: ',newArr2);

// using (...) spread operator
const newArr3 = [...friends];

console.log('newArr3 using spread operator: ',newArr3);

// JS built-in method Math.max()
let arr = [1, 2, 3, 4];
console.log(Math.max(...arr));
