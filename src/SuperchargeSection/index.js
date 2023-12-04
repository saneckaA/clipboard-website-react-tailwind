import React from 'react';
import blacklist from '../images/icon-blacklist.svg';
import text from '../images/icon-text.svg';
import preview from '../images/icon-preview.svg';

const SuperchargeSection = () => {
    return (
        <div className='section-container my-20 flex flex-col items-center'>
            <h3>
                Supercharge your workflow
            </h3>
            <p className='section-paragraph'>
                We've got the tools to boost your productivity.
            </p>
            <div className='flex flex-col items-center justify-between md:flex-row space-y-16 md:space-y-0 md:space-x-12'>
                <div className='flex flex-col items-center space-y-5'>
                    <img className='mb-6 hover:scale-105 duration-200 cursor-pointer' src={blacklist} />
                    <h5>Create blacklists</h5>
                    <p className='max-w-md text-grayishBlue'>Easily search your snippets by content category, web address, application, and more.</p>
                </div>
                <div className=' flex flex-col items-center space-y-5'>
                    <img className='mb-6 hover:scale-105 duration-200 cursor-pointer' src={text} />
                    <h5>Plain text snippets</h5>
                    <p className='max-w-md text-grayishBlue'>Remove unwanted formatting from copied text for a consistent look</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                    <img className='mb-6 hover:scale-105 duration-200 cursor-pointer' src={preview} />
                    <h5>Sneak preview</h5>
                    <p className='max-w-md text-grayishBlue'>Quick preview of all snippets on your Clipboard for easy access</p>
                </div>
            </div>
        </div>
    )
}

export default SuperchargeSection;