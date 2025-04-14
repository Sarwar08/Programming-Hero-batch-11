
console.log('Abdul');

setTimeout(()=>{
    console.log("ami pore asi");
},1000);

let count = 0;
const clockId = setInterval(() => {
    console.log('ami 3s call hoite thaki');
    count++;
    if (count === 5){
        clearInterval(clockId);
        console.log('clockId reached call in interval stopped.')
    }
}, 1000);