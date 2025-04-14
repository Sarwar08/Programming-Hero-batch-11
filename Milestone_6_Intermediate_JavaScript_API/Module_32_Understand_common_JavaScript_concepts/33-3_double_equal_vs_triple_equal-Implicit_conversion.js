
const num1 = 10;
const num2 = "10";

if (num1 == num2){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

// Double equal (==) checks value only,does not check data types.

// Triple equal (===) checks value and data types. 

const num3 = true;
const num4 = 1;

if (num1 == num2){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

// Its completely wrong.
// true is a boolean data type. But value is 1. 
// 1 is number data type. Value is 1.


// num1 = []; num2 = []; // Not Equal

// num1 = []; num2 = num1; // Equal

// primitive data stores as reference. 
// js can not check primitive data directly.

// Type Conversion or Type coercion.

if ( 5 * "2" === 10){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

/*
5 + null = 5 
"5" + null = "5null"
"5" + 2 = "52"
"5" - 2 = 3
"5" * "2" = 10
*/