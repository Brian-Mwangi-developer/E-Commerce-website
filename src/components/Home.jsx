import React from 'react'
import bg from '../assets/background.jpg'

function Home() {
    return (
        <div className='mt-20 relative top-0'>
            <div className="card w-full rounded-none bg-base-50 shadow-xl image-full">
                <figure><img src={bg} alt="Shoes" className='w-full' /></figure>
                <div className="card-body">
                    <h1 className="card-title font-extrabold text-6xl">NEW SEASON NEW RELEASE!!</h1>
                    <p className='text-3xl'>CHECK OUT ALL THE TRENDS</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home