
const personAbul = {
    // key: value,
    name: 'abul',
    age: '10',
    country: 'bd',
    friends: ['kabul', 'habul'],
    work: {
        partTime: 'personal project',
        fullTime: 'big project'
    }
}

// for in loop
for (const key in personAbul){
    // console.log(key);
    // console.log(personAbul[key]);
    // console.log(`key: ${key} ; value: ${personAbul[key]} `);
    
    // console.log(`key: ${key} ; value: ${personAbul.key} `);
}

// for of loop

// console.log(Object.entries(personAbul));

for (const [key, value] of Object.entries(personAbul)){
    console.log(`key(${key}): value(${value})`);
}

/*
- First for of loop makes full array Object.entries(personAbul) into single array.

- Every single array is made of key : value.

- Now we can destructue in [key, value]
    - const [] = every single array
*/