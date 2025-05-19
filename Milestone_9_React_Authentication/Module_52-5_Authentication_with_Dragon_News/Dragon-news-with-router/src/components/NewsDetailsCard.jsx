import React from 'react'
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    const {category_id, image_url ,title, details} = news;

  return (
    <div className='space-y-5'>
        <img className='w-full h-[350px] object-cover' src={image_url} alt="" />
        <p className='text-2xl'>{title}</p>
        <p>{details}</p>
        <Link className='btn btn-secondary' to={`/category/${category_id}`}>Back to Category</Link>
    </div>
  )
}

export default NewsDetailsCard