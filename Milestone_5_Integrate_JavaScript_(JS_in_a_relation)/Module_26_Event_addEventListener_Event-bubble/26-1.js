
console.log("external file");

// option 2
function makeYellowgreen (){
    document.body.style.backgroundColor = 'yellowgreen';
}

function makeSteelblue (){
    document.body.style.backgroundColor = 'steelblue';
}

// option 3 
const btnMakeRed = document.getElementById('btn-make-red');
// btnMakeRed.style.backgroundColor = 'red';
btnMakeRed.onclick = function (){
    document.body.style.backgroundColor = 'red';
    btnMakeRed.style.backgroundColor = 'red';
}

// option 3: slight different
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple; // this should not be called.

function makePurple (){
    document.body.style.backgroundColor = 'purple';
}

// option 4: addEventListener
    // getElementById('id').addEventListener('event type', handler)
document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// make gold
document.getElementById('btn-make-gold').addEventListener('click', function (){
    document.body.style.backgroundColor = 'goldenrod';
})

// reset button
document.getElementById('btn-reset').addEventListener('click', function reset(){
    document.body.style.backgroundColor = '#313131';
    btnMakeRed.style.backgroundColor = '';
})
