

function sum () {
    let counter = 0;
    return function (){
        counter = counter + 1;
        console.log(counter);
    }
}

const result = sum();
result();
result();
result();


const result2 = sum();
result2();

result();
/*
JS removes the garbage value.

In this case counter is also used inside the returned function. So it is not a garbage value. 

As it is stored in the memory. It is increasing the value. 

The relation between called function and returned function.

This is called closure.

*/