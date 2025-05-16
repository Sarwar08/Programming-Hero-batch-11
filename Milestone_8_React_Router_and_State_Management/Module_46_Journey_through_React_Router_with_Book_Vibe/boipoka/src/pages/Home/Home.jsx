import React, { Suspense } from 'react'
import Banner from '../../components/Banner/Banner'
import Books from '../Books/Books'
import axios from 'axios';

const Home = () => {

    // const booksPromise = fetch('booksData.json').then(res => res.json());
    // const booksPromise = axios.get('booksData.json');


  return (
    <div>
        <Banner />
        {/* <Suspense>
            <Books booksPromise={booksPromise} />
        </Suspense> */}
        <Books />
    </div>
  )
}

export default Home