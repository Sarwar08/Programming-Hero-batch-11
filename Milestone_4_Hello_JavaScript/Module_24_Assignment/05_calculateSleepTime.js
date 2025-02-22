
/*
    input: array in second
    output: object -> hours, minutes, seconds

*/

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

    // console.log(totalSeconds);

    const seconds = totalSeconds % 60;
    // console.log(seconds);
    
    let mins = 0;
    if ((totalSeconds / 60) > 60){
        mins = Math.floor(totalSeconds / 60) - 60;
    }
    else{
        mins = Math.floor(totalSeconds / 60);
    }
    // console.log(mins);
    
    let hours = 0;
    if ((totalSeconds / 60) > 60){
        hours = Math.floor(mins / 60) + 1;
    }
    else{
        hours = Math.floor(mins / 60);
    }
    // console.log(hours);

    const sleepTime = {
        hour : hours,
        minute: mins,
        second: seconds
    }

    return sleepTime;
    
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([5600, "100"]));
