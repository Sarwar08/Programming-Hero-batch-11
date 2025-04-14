
// Prmise has 3 state: Pending, Resolve, Reject

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    })
}
// loadData();

const loadData2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();
        // console.log(users);

        for (const user of users){
            console.log(user.username);
        }
    }
    catch(err){
        console.log('error occured', err);
    }
}
// loadData2();

// Promis
const createPromise = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status){
            // resolve({name: 'abul'});

            const mockData = {
                json: () => Promise.resolve({name: 'json abul'})
            }
            resolve(mockData);
        }
        else{
            reject('server error');
        }
    })
}

// console.log(createPromise());


// createPromise()
//     .then((res) => console.log(res)
//     )
//     .catch((err) => console.log(err))

// createPromise()
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// Promise all
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1', 
    'https://jsonplaceholder.typicode.com/comments/1', 
    'https://jsonplaceholder.typicode.com/albums/1', 
    'https://jsonplaceholder.typicode.com/photos/1', 
    'https://jsonplaceholder.typicode.com/todos/1', 
    'https://jsonplaceholder.typicode.com/users/1', 
];

Promise.all(urls.map((url) => {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
    }))
    .then((res) => res)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

