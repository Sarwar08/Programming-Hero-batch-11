
const numbers = [1, 2, 3, 4, 5, 6];

const addedNumbers = [];

for (let i = 0; i < numbers.length; i++){
    const addOne = numbers[i] + 1;
    addedNumbers.push(addOne);
}

// console.log(addedNumbers);

// using array map
// const newArray = numbers.map(number => number + 1);
const newArray = numbers.map((number, index) =>{
    console.log(index);
    return number;
});
console.log(newArray);

