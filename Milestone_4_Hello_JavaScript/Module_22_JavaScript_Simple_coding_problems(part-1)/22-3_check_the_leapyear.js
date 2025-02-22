
const year = 2012;

/* 
- divisible by 4; not divisible by 100
- divisible by 400; 
*/

function isLeapYear (year){
    if (year % 4 === 0 && year % 100 !== 0){
            return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeapY = isLeapYear(year);

// console.log(isLeapY);
if (isLeapY === true){
    console.log(year, "is a leap year.");
}
else{
    console.log(year, "is not a leap year.");
}

