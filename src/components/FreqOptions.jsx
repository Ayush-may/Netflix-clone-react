import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";

const FreqOptions = ({ data }) => {

    const [show, SetShow] = useState(false);

    return (
        <div className='freqOption' style={{
            userSelect: 'none'
        }}  >
            <div
                className='freqOption-menu px-3 py-4 d-flex align-items-center justify-content-between'
                onClick={() => {
                    SetShow(prev => !prev)
                }}
            >
                <h4>{data}</h4>
                <IoIosAdd size={'2em'} />
            </div>
            {
                show && (
                    <div className='freqOption-additionData p-2 mt-1'>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores placeat eum totam fugiat asperiores voluptate impedit explicabo fuga maxime recusandae corporis officia cupiditate quas fugit sunt, hic neque suscipit. Eos.</h5>
                    </div>
                )
            }
        </div>
    )
}

export default FreqOptions