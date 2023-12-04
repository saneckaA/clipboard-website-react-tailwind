import React from 'react';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import insta from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className='bg-gray-50'>
            <div className='section-container'>
                <div className='flex flex-col space-y-8 items-center justify-between md:flex-row md:space-y-0 pt-4 pb-4'>
                    <img src={logo} />
                    <div className='flex flex-col md:flex-row items-center justify-between flex-1 mb-10 space-y-8 md:mb-0 md:space-y-0 text-grayishBlue'>
                        <div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
                            <div className='flex flex-col space-y-4 text-center md:text-left'>
                                <div><a href="#" className='hover:text-strongCyan' />FAQs</div>
                                <div><a href="#" className='hover:text-strongCyan' />Contact Us</div>
                            </div>
                            <div className='flex flex-col space-y-4 text-center md:text-left'>
                                <div><a href="#" className='hover:text-strongCyan' />Privacy Policy</div>
                                <div><a href="#" className='hover:text-strongCyan' />Press Kit</div>
                            </div>
                            <div className='flex flex-col space-y-4 text-center md:text-left'>
                                <div><a href="#" className='hover:text-strongCyan' />Install Quide</div>
                            </div>
                        </div>
                        <div className='flex justify-between w-32 py-1'>
                            <a href="#"><img src={facebook} /></a>
                            <a href="#"><img src={twitter} /></a>
                            <a href="#"><img src={insta} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;