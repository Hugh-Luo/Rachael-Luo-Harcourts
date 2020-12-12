import React from 'react';

import Header from "./header";
import Footer from "./footer";

import Img from './Rachael-Img'

function Contact () {

    const phone = '+61 401 506 620'
    const email = "rachael.luo@harcourts"

    return (
        <div className='Contact'>
            <Header/>
            <div className="jumbotron">
                <Img/>

                <h1 className="display-4">Hello!</h1>
                <hr className="my-4"/>

                <div className='contact-phone'>
                    <span>Phone: </span><a href={'tel: ' + phone} > {phone} </a>
                </div>

                <div className='contact-email'>
                    <span>Email: </span><a href={'mailto: '+ email} > {email} </a>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact;
