
const fetchedData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
        const data = await response.json();
        showUsers(data);
    }
    catch(error){
        console.log('error found: ', error);
    }
}

fetchedData();

const showUsers = (users) => {
    // console.log(users);
    const divUsers = document.getElementById('divUsers');

    for (const user of users){
        console.log(user);

        const p = document.createElement('p');
        p.innerText = user.name;
        p.classList.add('card');

        divUsers.appendChild(p);

        

    }
    
}