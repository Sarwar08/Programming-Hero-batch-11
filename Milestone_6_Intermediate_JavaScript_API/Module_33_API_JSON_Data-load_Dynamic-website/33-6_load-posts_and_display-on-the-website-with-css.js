
const handlePosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        displayPosts(data);
    })
}

const displayPosts = (posts) => {
    // console.log(posts);

    const postContainer = document.getElementById('post-Container');
    
    for (const post of posts){
        console.log(post);
        
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.id}</p>
            <p>${post.body}</p>
        `;

        postContainer.appendChild(div);
    }
}

handlePosts();