
// const age = 18;

// localStorage.setItem("age", age);
// localStorage.setItem("age2", 20);

// console.log(localStorage.getItem("age2"));
// console.log(localStorage.getItem("age"));

// localStorage.removeItem("age");

// const handleLocalStorage = () => {
    // const name = 'abul mia';
    // localStorage.setItem("name", name);
    // console.log(localStorage.getItem('name'));
// }

const handleLocalStorage = () => {
    const person = {
        name: 'bablu',
        age: 29,
        friends: ['moya']
    }

    // console.log(person.toString());

    // localStorage.setItem('person', person);

    const convertedToString = JSON.stringify(person);
    localStorage.setItem('person', convertedToString);
}


const data = localStorage.getItem('person');

const convertedToObject = JSON.parse(data);

console.log(convertedToObject.name);






