import React, { Suspense } from 'react'
import Categories from '../Categories'

const LeftAside = () => {
    return (
        <div>
            <h2>
                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    <Categories />
                </Suspense>
            </h2>
        </div>
    )
}

export default LeftAside