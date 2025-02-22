
const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
}

console.log(mobile.sick); 


// for of : array
// for in : object

// for (const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);

const values = Object.values(mobile);
console.log(values);

for (const key of keys){
    console.log(key);
    console.log(mobile[key]); 
}

/** Access a object

- obj.porp
- obj['prop']
- {prop} = obj
- obj[prop] 

*/

const x = '';
console.log(!x.length);

if (!x.length){
    console.log('hey');
}
else {
    console.log('hi');
    
}

delete mobile.camera;

console.log(mobile);

let str = 'mississippi';
console.log(str.indexOf('i', 8));


