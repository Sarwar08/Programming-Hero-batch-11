
const height = {
    number: 75,
    unit: "in"
}

function inchTOfeet (height_Inch){
    const height_feet = parseInt(height_Inch / 2);
    // console.log(height_Inch);

    let totalHeight = 0;
    if (height_Inch % 12 !== 0){
        // console.log(height_Inch);
        const restInHeight = height_Inch % 12
        // console.log(restInHeight);
        totalHeight = height_Inch + " feet " + restInHeight + " inch";
        console.log(totalHeight);  
    }
    else{
        totalHeight = height_Inch + " feet";
        console.log(totalHeight);
    }

    return totalHeight;
}

function callInchToFeet (height){
    // console.log(height.unit);
    if (height.unit === "inch"){
        // console.log(height.number);
        return inchTOfeet(height.number);
    }
    else{
        return "Please enter your height in inch";
    }
    
}

// callInchToFeet(height);

const getHeight = callInchToFeet(height);

console.log("Your height is: ", getHeight);


