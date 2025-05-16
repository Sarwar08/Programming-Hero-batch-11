import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/posts');
    }

  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={handleNavigate}>Go Back</button>
    </div>
  )
}

export default PostDetails