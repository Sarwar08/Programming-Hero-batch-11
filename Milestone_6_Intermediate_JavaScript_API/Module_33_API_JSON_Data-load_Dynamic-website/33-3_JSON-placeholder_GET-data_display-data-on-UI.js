// go to jsonplaceholder

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


const handleLoadData = () => {
    const fetchedData  = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
