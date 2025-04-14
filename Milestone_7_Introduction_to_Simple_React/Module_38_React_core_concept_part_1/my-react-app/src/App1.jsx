
import './App.css'
import Lib1 from './components/Lib1'
// import Actor from "./components/actor";
// import Singer from './components/Singer';
import Library from './components/Library'
import Counter from './components/Counter'
import RunCounter from './components/RunCounter'
import { Suspense } from 'react'
import Users from './components/Users'
import Friends from './components/Friends'
import Guests from './components/Guests'
import Customers from './components/Customers'
import Players from './components/Players'

// const actors = ['bappa', 'hena', 'alom', 'bolai'];

// const singers = [
//   {id: 1, name: 'Mahfuz', age: 68},
//   {id: 2, name: 'abul', age: 68},
//   {id: 3, name: 'babul', age: 68},
// ]

const books = [
  { id: 1, name: 'physics', price: 250 },
  { id: 2, name: 'math', price: 240 },
  { id: 3, name: 'biology', price: 230 },
  { id: 4, name: 'chemistry', price: 260 },
]

// https://jsonplaceholder.typicode.com/users

// normal fetch using .then and variable
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())

// fetch using function with async awit 
const fetchFriends = async() => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  return res.json();
}

// fetch using fuction with try catch async await 
const guestfetch = async() => {
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    
    return res.json();
  }
  catch (error){
    return console.log(error);
  }
}

// 
const fetchCustomers = async() => {
  const res  = await fetch('https://jsonplaceholder.typicode.com/users');

  return res.json();
}


function App() {
  return (
    <>
      <Players />
      <Suspense>
        <Customers fetchCustomers={fetchCustomers()} />
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
         <Guests guestfetch={guestfetch()} />
      </Suspense>

      <Suspense fallback={<h3>Loadding</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends fetchFriends = {fetchFriends()} />
      </Suspense>

      <RunCounter />
      <Counter />
      <Library books={books} />
      <Lib1 books={books} />

      {/* {
      actors.map((actor) => <Actor name={actor} />)
     } */}

      {/* {
      singers.map((singer)=> <Singer key={singer.id} singer={singer} />)
     } */}
    </>
  )
}


export default App
