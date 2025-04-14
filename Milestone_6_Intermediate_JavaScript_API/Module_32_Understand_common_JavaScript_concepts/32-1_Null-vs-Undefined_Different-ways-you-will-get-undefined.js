
/*
- Non-zero value    -> value ase
- 0                 -> value ase but 0
- Null              -> stand ase but stand e kisui nai
- Undefined         -> ostitto nai
*/

const name1 = 'gias'; // non-zero value

let name2; // undefined

let name3 = null;

console.log(name3); 
console.log(typeof name3); // object - obak bisoy

function sum (num1, num2){
    console.log(num1, num2);
    // return; // undefined
    return num1 + num2; 
}
sum(); // undefined undefined
sum(10); // 10 undefined

const result = sum(10, 20);
console.log(result); // undefined -> as function sum does not return anything

// return; it is also undefined




