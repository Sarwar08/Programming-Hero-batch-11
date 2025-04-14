
function add (num1, num2){
    const result = num1 + num2;
    console.log('add func: ',result);
}

add (10, 20); // number + number =  30
add (10);     // number + undefined =  NaN
add ();       // undefinded + undefined = NaN

console.log(add.length);


//To avoid the NaN 
function add1 (num1 = 0, num2 = 0){
    // for add default value might be 0 and for multiply its 1.
    const result = num1 + num2;
    console.log('add1 func: ',result);
}

add1 (10, 20); // number + number =  30
add1 (10);     // number + undefined =  NaN
add1 ();
