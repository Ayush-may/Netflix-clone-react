import React from 'react'
import './../index.css'
import BigInputField from './BigInputField'

const FontPageInput = () => {
    return (
        <div className='pageDimension position-relative text-light' >
            <div className='pageDimensionFirst text-light mt-md-5 text-center px-5' >
                <h1 className='fw-bold ' >Unlimited movies, TV shows and more.</h1>
                <h4 className=' mt-4'>Watch anywhere. Cancel anytime.</h4>
            </div>
            <BigInputField />
            <img className='z-n1 position-absolute top-0 left-0 opacity-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
    )
}

export default FontPageInput