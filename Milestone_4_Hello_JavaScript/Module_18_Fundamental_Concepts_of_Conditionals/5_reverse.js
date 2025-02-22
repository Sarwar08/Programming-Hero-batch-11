
const bakko = 'I am learning web dev';

let reverse = '';
for (const letter of bakko){
    // console.log(letter);
    reverse = letter + reverse;
} 

// console.log(reverse);

let normal = '';
for (let i = 0; i < bakko.length; i++){
    normal += bakko[i];
}

// console.log(normal);

let reverse1 = '';

for (let i = bakko.length-1; i >= 0; i--){
    reverse1 += bakko[i];
}

// console.log(reverse1);

const reverse2 = bakko.split('').reverse().join('');  // ulte gese

console.log(reverse2);

