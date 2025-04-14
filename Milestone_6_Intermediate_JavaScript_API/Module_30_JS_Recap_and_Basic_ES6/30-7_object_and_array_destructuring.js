
const personAbul = {
    name: 'abul',
    age: '10',
    friends: ['kabul', 'habul'],
    work: {
        partTime: 'personal project',
        fullTime: 'big project'
    }
}

const {name, work, age, friends} = personAbul;

console.log(name);
console.log(work);
console.log(age);
console.log(friends);

const [kab, jab] = friends;

console.log(kab, jab);

const {fullTime, partTime} = work;

console.log(fullTime, partTime);

