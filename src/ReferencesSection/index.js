import React from 'react';
import hp from '../images/logo-hp.png';
import google from '../images/logo-google.png'
import ibm from '../images/logo-ibm.png';
import microsoft from '../images/logo-microsoft.png';
import vector from '../images/logo-vector-graphics.png';

const ReferencesSection = () => {
  return (
    <div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
        <img className='hover:scale-105 duration-200 cursor-pointer' src={google} />
        <img className='hover:scale-105 duration-200 cursor-pointer' src={hp} />
        <img className='hover:scale-105 duration-200 cursor-pointer' src={ibm} />
        <img className='hover:scale-105 duration-200 cursor-pointer' src={microsoft} />
        <img className='hover:scale-105 duration-200 cursor-pointer' src={vector} />
    </div>
  )
}

export default ReferencesSection;