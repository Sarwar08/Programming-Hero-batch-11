import React from 'react'

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" name='name' placeholder='Your Name'/>
            <br />
            <input type="email" name='email' placeholder='Your Email' />
            <br />
            <input type="submit" />
        </form>

    </div>
  )
}

export default SimpleForm