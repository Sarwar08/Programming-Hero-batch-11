
import { Suspense } from 'react'
import './App.css'
import Users from './components/Users'

function App() {

  const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());

  return (
    <>

      <h1>User Management Application</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Users usersPromise={usersPromise} />
      </Suspense>

    </>
  )
}

export default App
