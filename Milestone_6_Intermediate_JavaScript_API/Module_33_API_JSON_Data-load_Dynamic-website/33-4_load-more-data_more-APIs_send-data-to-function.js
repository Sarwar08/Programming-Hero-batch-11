
// https://jsonplaceholder.typicode.com/users

const handleUsersData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUsers(data);
        })
}

const displayUsers = (users) => {
    // console.log(users[0]);
    for (const user of users){
        console.log(user.id);
        console.log(user.name);
    }
}