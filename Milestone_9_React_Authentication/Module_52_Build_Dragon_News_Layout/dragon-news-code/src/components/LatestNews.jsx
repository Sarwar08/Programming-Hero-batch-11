import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
    return (
        <div>
            <div className='flex items-center gap-4 bg-base-200 p-3'>
                <p className='text-base bg-secondary px-3 py-2'>Latest</p>
                <Marquee className='flex gap-7' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !Match Highlights: Germany vs Spain as...   </p>
                <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    )
}

export default LatestNews