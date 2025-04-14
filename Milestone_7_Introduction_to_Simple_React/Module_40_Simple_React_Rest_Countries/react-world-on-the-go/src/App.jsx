// import { useState } from 'react'
import './App.css'
import { Suspense } from 'react';
import Users from './components/Users';
import Counter from './components/Counter';
import Countries from './components/Countries/Countries';

// https://restcountries.com/v3.1/all

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<h3>Wait data is loading . . . </h3>}>
        <Countries countriesPromise = {countriesPromise} />
      </Suspense>

      <Suspense fallback=" ">

      </Suspense>
    </>
    
  )
}

export default App
