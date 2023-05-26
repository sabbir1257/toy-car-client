import React from 'react';
import Banner from './Banner';
import Tabss from './Tabss';
import LogoSection from './Logosection';
import CarSection from './CarSection';
import Brand from './Brand';

const Home = () => {
    return (
        <div className='md:w-[1250px] mx-auto'>
            <Banner/>
            <LogoSection/>
            <Tabss/>
            <Brand/>
            <CarSection/>
        </div>
    );
};

export default Home;