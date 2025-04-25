import React from 'react'
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookMark, handleTime }) => {

    return (
        <div className='border border-green-900 m-2 rounded-lg'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img src={blog.cover} className=''/>
                </figure>
                <div className="card-body">
                    <div className="author flex justify-between items-center">
                        <h3>{blog.author}</h3>
                        <img className='w-16' src={blog.author_img} alt="" />
                        <button className='cursor-pointer' onClick={() => handleBookMark(blog)}><FaBookmark size={25}  /></button>
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex'>
                    {
                        blog.hashtags.map((hash) => <p>{hash}</p>)
                    }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleTime(blog.reading_time, blog.id)} >Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog

/**\


author
: 
"Hamza Sohail"
author_img
: 
"https://i.ibb.co/VvLNdLL/boy1.png"
cover
: 
"https://i.ibb.co/84Zfw2n/1.jpg"
hashtags
: 
Array(2)
0
: 
"beginners"
1
: 
"es6"
length
: 
2
[[Prototype]]
: 
Array(0)
id
: 
1
posted_date
: 
"September 15, 2023"
reading_time
: 
5
title
: 
"Top 10 ES6 Features You Must Know"
[[Prototype]]
: 
Object
 */