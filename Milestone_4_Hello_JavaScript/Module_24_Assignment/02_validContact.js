
/* 
Conditinons:
    - 11 digit
    - initial - 01
    - No space
*/

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

// console.log(validContact(["01304400506"]));
console.log(validContact("01345678900"));

