import React from 'react'
import FreqOptions from './FreqOptions'

const FreqSection = () => {
    return (
        <div className='freqSection w-100 px-4 py-5 text-light text-center' >
            <h2 className='pb-5' >Frequently Asked Questions</h2>

            <FreqOptions data={'what is Netflix'} />
            <FreqOptions data={'How much does Netflix cost ?'} />
            <FreqOptions data={'Where can I watch ?'} />
            <FreqOptions data={'How do I cancel ?'} />
            <FreqOptions data={'What can I watch on Netflix ?'} />
            <FreqOptions data={'Is Netflix good for Kids ? ?'} />
        </div>
    )
}

export default FreqSection