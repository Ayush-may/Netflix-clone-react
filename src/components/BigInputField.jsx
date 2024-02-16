import React from 'react'
import './../index.css'

const BigInputField = () => {
    return (
        <div className='text-center px-5 text-light'>
            <h4 className='mt-4 '>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='d-flex justify-content-center align-items-center row mt-4  mt-md-4' >
                <input className='p-1 py-2 py-md-3 text-light rounded col-9 col-md-6 bg-tranparent' type="text" placeholder='Enter Name' />
                <button className='btn btn-danger col-4 col-md-2 py-2 py-md-3 p-1 mt-2 mt-md-0 ms-md-3' >Get Started</button>
            </div>
        </div>
    )
}

export default BigInputField