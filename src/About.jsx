import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom';
import img from '../src/images/workplace.svg'
const About = () => {
    return (
        <>
            <Common
                name='Welcome to About Page'
                imgsrc={img}
                visit='/contact'
                btname='Contact Now'
            />
        </>
    )
}

export default About;
