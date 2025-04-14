
// const name = 'sarwar'; // true
// const name = ''; // false 
// const name = ' '; // true
// const name = -1; // true
// const name = 0; // false 
// const name = {}; // true 
// const name = []; // true 
// const name = null; // false 
// const name = undefined; // false 
const name = NaN; // false 

if (name){
    console.log(name + ' This is truthy value')
}
else{
    console.log(name + " This is falsy value");
}

// if a variable has a value, its a truthy value.
// if empty, its a falsy value.

// if name is true; !name is false; !!name -> true;