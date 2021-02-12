import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear()
   
    return (
        <>
            <footer id='footer' >
                <p>© { year} Lorem All Rights Reserved | Terms and Condition Apply</p>
            </footer>
        </>
    )
}

export default Footer;
