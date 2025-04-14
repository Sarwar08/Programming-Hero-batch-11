
const handleUsersData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        showUsers(data);
    })
}

const showUsers = (users) => {
    
    const userDiv = document.getElementById('users');

    for (const user of users){

        console.log(user.name);

        const li = document.createElement('li');
        li.innerText = user.name;

        userDiv.appendChild(li);
    }
}