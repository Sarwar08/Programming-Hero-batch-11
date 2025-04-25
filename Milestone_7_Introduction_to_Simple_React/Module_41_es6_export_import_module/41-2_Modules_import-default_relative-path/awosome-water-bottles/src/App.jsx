import './App.css'
import { Suspense } from 'react';
import Bottles from './components/Bottles';

function App() {

  const bottlesPromise = fetch('../public/bottles.json').then(res => res.json());
  console.log(bottlesPromise);
  

  return (
    <>
      <h1>Buy Awosome Water Bottle</h1>

      <Suspense fallback = {<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise} /> 
      </Suspense>
    </>
  )
}

export default App