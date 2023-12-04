import React from 'react'

const BottomSection = () => {
    return (
        <div className='section-container mb-40 pt-16 flex flex-col items-center'>
            <h3>
                Clipboard for iOS and Mac OS
            </h3>
            <p className='section-paragraph'>
                Available for free on the App Store. Download for Mac or iOS, sync with
                iCloud and you're ready to start adding to your clipboard.
            </p>
            <div className='button-container'>
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

export default BottomSection;