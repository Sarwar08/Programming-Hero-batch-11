
const computer = {
    brand: 'lenovo',
    price: 25000,
    processor: 'intel',
    hdd: '512gb'
}

const keys = Object.keys(computer);
const values = Object.values(computer);

console.log(keys);
console.log(values);

const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}

console.log(college.unique.result.merit);

