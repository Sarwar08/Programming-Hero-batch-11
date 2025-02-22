
const a = [1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 257, 8, 9, 10, 5];

function removeDuplicate (arr){
    console.log(arr);

    const unique = [];
    for (const item of arr){
        if (unique.includes(item) === false){
            unique.push(item);
        }
    }   
    return unique;
}

const noDuplicate = removeDuplicate(a);

console.log(noDuplicate);
