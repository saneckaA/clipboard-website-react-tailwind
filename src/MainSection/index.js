import React from 'react';
import logo from '../images/logo.svg';

const MainSection = () => {
    return (
        <div className='section-container mb-40 px-10 pt-16 flex flex-col items-center'>
            <img className='mx-auto my-16' src={logo} />
            <h3>
                A history of everything you copy
            </h3>
            <p className='text-2xl max-w-3xl mx-auto text-grayishBlue mb-10'>
                Clipboard allows you to track and organize everything you copy.
                Instantly access your clipboard on all your devices
            </p>
            <div className='flex flex-col justify-center w-full md:flex-row space-y-6 text-xl md:space-x-4 md:space-y-0'>
                <button className='bg-strongCyan text-white text-center rounded-full py-2 px-8 shadow-lg
                duration-200 hover:opacity-80'>
                    Download for IOS
                </button>
                <button className='bg-lightBlue text-white text-center rounded-full py-2 px-8 shadow-lg
                duration-200 hover:opacity-80'>
                    Download for Mac
                </button>
            </div>
        </div>
    )
}

export default MainSection;