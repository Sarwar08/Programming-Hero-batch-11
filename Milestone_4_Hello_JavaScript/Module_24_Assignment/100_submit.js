
function calculateVat (price){
    if ( typeof (price) === "string" || price < 0){
        return "Invalid";
    }
    else{
        const vatRate = 7.5;
        const vat = price * (vatRate/100)
        return vat;
    }
}

function validContact (contact){
    if (typeof(contact) !== "string"){
        return "Invalid";
    }
    
    if (contact.length === 11 &&
        contact.slice(0, 2) === "01" &&
        contact.includes(" ") === false
    ){
        return true;
    }
    else {
        return false;
    }
}

function willSuccess (marks){
    
    if (!Array.isArray(marks)){
        return "Invalid";
    }

    let pass = 0;
    let fail = 0;

    for (const mark of marks){
        if (mark >= 50){
            pass += 1;
        }
        else{
            fail += 1;
        }
    }

    if (pass > fail){
        return true;
    }
    else{
        return false;
    }
}

function validProposal (person1, person2){

    if (typeof(person1) !== "object" ||
        typeof(person2) !== "object"
    ){
        return "Invalid";
    }

    if (person1.gender !== person2.gender && 
        Math.abs(person1.age - person2.age) <= 7
    ){
        return true;
    }
    else{
        return false;
    }
}

function calculateSleepTime (times){

    for (const time of times){
        if (typeof(time) !== "number"){
            return "Invalid";
        }
    }

    let totalSeconds = 0;

    for (const time of times){
        totalSeconds += time;
    }

    const seconds = totalSeconds % 60;
    
    let mins = 0;
    if ((totalSeconds / 60) > 60){
        mins = Math.floor(totalSeconds / 60) - 60;
    }
    else{
        mins = Math.floor(totalSeconds / 60);
    }
    
    let hours = 0;
    if ((totalSeconds / 60) > 60){
        hours = Math.floor(mins / 60) + 1;
    }
    else{
        hours = Math.floor(mins / 60);
    }

    const sleepTime = {
        hour : hours,
        minute: mins,
        second: seconds
    }

    return sleepTime;
}

