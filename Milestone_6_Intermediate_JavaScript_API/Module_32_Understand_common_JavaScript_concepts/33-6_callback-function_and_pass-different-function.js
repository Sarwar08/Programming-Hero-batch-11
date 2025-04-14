
function ghotok (patri, name){
    patri(name);
}

const patri = function (name){
    console.log('ok ami paisi', name);
    
}

ghotok(patri, 'hero');

// When a fuction is passed as a argument, then called inside the that function is callback function.