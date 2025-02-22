
const a = [1, 2, 3, 4, 5, 6, 7, 8];


function allEvenNums (nums){
    // console.log(nums);
    const evens = [];
    for (const num of nums) {
        // console.log(num);
        if (num % 2 == 0){
            // console.log(num);
            evens.push(num)
        }
    }
    return evens;
}

function evensSum (evens) {
    // console.log(evens);
    let sum = 0;
    for (num of evens){
        sum += num;
    }
    return sum
}

const evens = allEvenNums(a);
console.log("array of evens is: ", evens);

const sum = evensSum(evens);
console.log("sum of evens: ", sum);





