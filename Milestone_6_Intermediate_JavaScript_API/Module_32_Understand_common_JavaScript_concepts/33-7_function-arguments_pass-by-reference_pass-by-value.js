
function sum (a, b, c){
  console.log(a, b, c);
  console.log(arguments);
    /*Arguments: 
      - array like object 
      - i can not push anything inside
    */

  const newArg = [...arguments];
  console.log(newArg);
    // Now its a complete array
    // now we can run any operation
    
}

sum (10, 20, 30);
console.log(sum.length); // parameters
console.log(sum.length);

/* we can provide arguments in two ways
  - pass by value 
  - pass by reference
*/

// pass by value

let name = 'masud';

function test(text){
  text = 'korim';
  console.log(text);
  
}

test(name);
console.log(name); // it does not changed


// pass by reference

const person = {name: 'abul', age: 10};

function sumObj (obj) {
  obj.name = 'heaa';
  console.log(obj)
}

sumObj(person);
console.log(person); // its changed

/*
Final Words: 
  - Value and Reference 

  - When we think about it - Think about
      - Value - Primitive Data Type
      - Reference - Non-Primitive Data Type

  - Value does not change
  - Reference changes as its value stored in some refering address. 
*/