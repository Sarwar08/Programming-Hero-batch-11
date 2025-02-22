
/**
 * 50 or above = pass
 * below 50 = fail
 * exam passed more than exam failed = true
 * else false.
 */


function willSuccess (marks){

    // console.log(Array.isArray(marks));
    
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

// console.log(willSuccess([60, 70, 80, 40, 30]));
console.log(willSuccess(48, 48, 92, 100));
