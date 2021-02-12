import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom';
import img from '../src/images/work.svg'
const Home = () => {
    return (
        <>
            <Common 
                name='Grow Your Business with'
                imgsrc={img}
                visit='/service'
                btname='Get Started' />
        </>
    )
}

export default Home;
