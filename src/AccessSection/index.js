import React from 'react';
import devices from '../images/image-devices.png';

const AccessSection = () => {
    return (
        <div className='section-container mb-40 pt-16 flex flex-col items-center'>
            <h3>
                Access Clipboard anywhere
            </h3>
            <p className='section-paragraph'>
                Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
            </p>
            <img className='mx-auto hover:scale-105 duration-200 cursor-pointer' src={devices} />
        </div>
    )
}

export default AccessSection;