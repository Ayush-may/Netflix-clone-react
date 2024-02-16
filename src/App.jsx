import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Nav from './components/Nav'
import FontPageInput from './components/FontPageInput'
import Border from './components/Border'
import SmallSections from './components/SmallSections'
import SmallSection2 from './components/SmallSection2'
import SmallSection3 from './components/SmallSection3'
import SmallSection4 from './components/SmallSection4'
import FreqSection from './components/FreqSection'
import BigInputField from './components/BigInputField'

const App = () => {
    return (
        <>
            <Nav />
            <FontPageInput />
            <Border />
            <SmallSections />
            <Border />
            <SmallSection2 />
            <Border />
            <SmallSection3 />
            <Border />
            <SmallSection4 />
            <Border />
            <FreqSection />
            <BigInputField />
            <div className='mb-5' ></div>
            <Border />
        </>
    )
}

export default App