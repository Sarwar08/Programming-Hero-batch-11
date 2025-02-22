
/**
 * different gender
 * age diff <= 7 years
 * 
 * input: object -> name, gender, age;
 * 
 * true or false
 */

const person1 = {
    name: "Rahul",
    gender: "male",
    age: 28
}

const person2 = {
    name: "Joya",
    gender: "female",
    age: 21
}

function validProposal (person1, person2){

    if (typeof(person1) !== "object" ||
        typeof(person2) !== "object"
    ){
        return "Invalid";
    }

    // console.log(person1, person2);
    if (person1.gender !== person2.gender && 
        Math.abs(person1.age - person2.age) <= 7
    ){
        return true;
    }
    else{
        return false;
    }
    
}

// console.log(validProposal(person1, person2));
console.log(validProposal(23, person2));
