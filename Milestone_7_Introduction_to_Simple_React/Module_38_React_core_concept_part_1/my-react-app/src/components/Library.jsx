import Book from "./Book";

export default function Library ({books}){

    return (
        <>
            <h2>Books Collections</h2>
            <p>No. of Books: {books.length}</p>
            <ul>
                {
                    books.map((book)=> <Book key={book.id} book={book} />)
                }
            </ul>
        </>
    )
}