import React, { Suspense, use, useEffect, useState } from 'react'
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Books = ({booksPromise}) => {

    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setBooks(data));
    // }, [])


    // const books = use(booksPromise);


    // const booksRes = use(booksPromise);
    // const books = booksRes.data;

    const books = useLoaderData();

    console.log(books);

    return (
        <div>
            <h2 className='text-2xl my-10'>No of Books: {books.length}</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    books.map((book) => <Book key={book.bookId} book={book} />)
                }
            </div>   
        </div>
    )
}

export default Books