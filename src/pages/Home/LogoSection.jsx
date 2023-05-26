import React from 'react';
import about from '../../img/collection.avif'
import about1 from '../../img/collection1.jpeg'
import about2 from '../../img/collection2.jpeg'
import about3 from '../../img/collection3.jpeg'


const LogoSection = () => {
    return (
        <div className='mx-auto md:w-[1250px] my-10 border-2 border-blue-600 p-5  rounded-lg'>
            <h1 className='text-4xl font-bold text-center my-8 underline text-blue-600'>Gallery</h1>
            <div className='md:flex gap-8 justify-center sm:justify-center'>
                <img className='h-56 w-56' src={about} alt="" />
                <img className='h-56 w-56' src={about1} alt="" />
                <img className='h-56 w-56' src={about2} alt="" />
                <img className='h-56 w-56' src={about3} alt="" />
            </div>
        </div>
    );
};

export default LogoSection;