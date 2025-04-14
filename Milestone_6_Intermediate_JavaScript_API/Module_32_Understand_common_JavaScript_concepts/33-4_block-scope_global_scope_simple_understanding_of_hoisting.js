
sum(10, 20);

function sum (n1, n2) {
    // this is block inside {...}
    const result = n1 + n2;
    
    console.log(result2); // hoisting occured undefined

    if (true){
        // const result2 = n1 - n2;
        var result2 = n1 - n2; // for hoisting
    }

    console.log(result2); // hoisting occured -10
    
    // console.log(result2); // cannot access
}
// console.log(result2); // cannot access even var is used

// console.log(result); // cannot access


sum(10, 20);

// var works within function. Do not exceed that scope.

// regular function also hoists.