
const a = [1, 2, 3, 4, 5, 6, 257, 8, 9, 10, 5];

function findOddNumbers (array){
    console.log(array);

    const oddArr = [];

    for (const num of array){
        console.log(num);
        if (num % 2 !== 0){
            oddArr.push(num);
        }
    }

    console.log(oddArr);

    let sumOfOdds = 0;
    for (const oddNum of oddArr){
        console.log(oddNum);
        sumOfOdds += oddNum;
    }

    console.log(sumOfOdds);
    
    return sumOfOdds;
    
}

findOddNumbers(a);