import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addBookId, getStoredBookIds } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal);

const BookDetails = () => {

    const { id } = useParams();
    console.log(typeof id);
    const idInt = parseInt(id);

    const books = useLoaderData();

    const currentBook = books.find(book => book.bookId === idInt);

    const { bookName, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, bookId } = currentBook;

    const handleMarkAsRead = () => {
        /**
        1. store with Id
        2. where to store
        3. array or collection
        4. if book already exist then show a alert
        5. if book not exist then push in the collection or array
        */
        addBookId(id);

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // });

        // toast("Wow so easy!");
    }

    return (
        <div className=''>
            <h1 className='text-center my-6 font-bold text-5xl'>Book Details</h1>

            <div className='grid md:grid-cols-2 gap-4 md:gap-20'>

                <div className='flex flex-col justify-center items-center md:border rounded-xl gap-4'>
                    <div>
                        <img className='w-72' src={image} alt="" />
                    </div>
                    <div className='text-center'>
                        <button onClick={() => handleMarkAsRead(id)} className="btn bg-amber-900 mr-4">Mark as Read</button>
                        <button className="btn bg-cyan-900">Add to Wishlist</button>
                    </div>
                </div>

                <div className=' flex flex-col gap-8'>
                    <h1 className='text-2xl'>Name of the Book: {bookName}</h1>
                    <p>Pages: {totalPages} Pages</p>
                    <p>Publish Year: {yearOfPublishing} AD</p>
                    <p>Publisher Name: {publisher}</p>
                    <p>Category : {category}</p>
                    <p>Rating : {rating}</p>
                    <p>Review : {review}</p>
                </div>

                {/* <ToastContainer /> */}
            </div>
        </div>
    )
}

export default BookDetails