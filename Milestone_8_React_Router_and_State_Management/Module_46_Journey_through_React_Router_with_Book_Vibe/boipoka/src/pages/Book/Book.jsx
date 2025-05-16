import React from 'react'
import { Link } from 'react-router';

const Book = ({ book }) => {

    const { bookName, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, bookId } = book;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border p-2">
                <figure className=''>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-4 justify-center'>
                        {
                            tags.map(tag => <span>{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{totalPages}</div>
                    </h2>
                    <p>Writer: {publisher}</p>
                    <div className='border-t border-dashed'></div>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book