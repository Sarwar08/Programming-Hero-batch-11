
export default function Lib1 ({books}){
    return (
        <>
            <ul>
                {
                    books.map((book) => {
                        return <li key={book.id}>Lib1 Book Name: {book.name}</li>
                    })
                }
            </ul>
        </>
    )
}