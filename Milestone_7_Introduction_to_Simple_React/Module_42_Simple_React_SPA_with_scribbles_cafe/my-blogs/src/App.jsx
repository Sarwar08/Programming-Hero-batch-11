
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs';
import { useState } from 'react';

function App() {

   const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
   const [readingTime, setReadingTime] = useState(0);
  
      const handleBookMark = (blog) => {
          const bookMarkedBlogs = [...bookmarkedBlogs, blog];
          setBookmarkedBlogs(bookMarkedBlogs);
      }

      const handleTime = (time, id) => {
        const newTime = readingTime + time;
        setReadingTime(newTime)
        handleRemoveBookmark(id)
      }

      const handleRemoveBookmark = (id) => {
        const remainingBookmark = bookmarkedBlogs.filter(marked => marked.id !== id);
        setBookmarkedBlogs(remainingBookmark);
      }

  return (
    <>
      <Navbar />
      <div className="main-container flex ">
        <div className="left-container w-[70%] text-center">
          <Blogs handleBookMark={handleBookMark} handleTime={handleTime} />
        </div>
        <div className="right-container w-[30%] text-center" >
          <p>User Reading Time: {readingTime}</p>
          <p>Bookmarked count: {bookmarkedBlogs.length}</p>
          {
            bookmarkedBlogs.map(bookmark => <p className='bg-red-600 p-2 shadow m-2'>{bookmark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
