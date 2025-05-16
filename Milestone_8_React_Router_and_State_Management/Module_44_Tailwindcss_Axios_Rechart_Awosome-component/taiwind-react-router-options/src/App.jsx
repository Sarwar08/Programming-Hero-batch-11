
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/pricingOptions'
import { Suspense } from 'react'
import ResultsChart from './components/ResultsChart/ResultsChart';
import MarksChart from './components/MarksChart/MarksChart';
import axios from 'axios';

// const pricingPromise = fetch('pricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');
// 'marksData.json'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise} />
        </Suspense> */}

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}  />
        </Suspense>

        <div className='mx-10 mt-8'>
          <ResultsChart />
        </div>
      </main>
    </>
  )
}

export default App
