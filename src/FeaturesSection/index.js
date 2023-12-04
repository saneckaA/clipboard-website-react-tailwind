import React from 'react';
import computer from '../images/image-computer.png';


const FeaturesSection = () => {
    return (
        <div className='section-container my-20 flex flex-col md:flex-row md:space-x-32 items-center relative '>
            <div className='md:w-1/2'>
                <img className='md:absolute top-0 right-[50%]' src={computer} />
            </div>
            <div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-15'>
                <div>
                    <h5 className='text-2xl text-darkGrayishBlue font-bold mb-2 '>Quick Search</h5>
                    <p className='max-w-md text-grayishBlue'>Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
                <div>
                    <h5 className='text-2xl text-darkGrayishBlue font-bold mb-2'>iCloud Sync</h5>
                    <p className='max-w-md text-grayishBlue'>Instantly saves and syncs snippets across all your devices.</p>
                </div>
                <div>
                    <h5 className='text-2xl text-darkGrayishBlue font-bold mb-2'>Completely History</h5>
                    <p className='max-w-md text-grayishBlue'>Retrieve any snippets from the first moment you started using the app.</p>
                </div>
            </div>
        </div>

    )
}

export default FeaturesSection;