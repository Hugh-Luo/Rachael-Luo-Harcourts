import React from 'react';

import Header from "./header";
import Footer from "./footer";

function RegisterExist() {

    const learn_more = 'https://harcourts.com.au/People/30164/Rachael-Luo?tab=for-sale'

    return (
            <container className='User-exist'>
                <Header/>
                <div className="jumbotron">
                    <h1 className="display-4">You already are my Member </h1>

                    <div className='content'>
                        <p className="lead"> You will receive the lastest information about this Market !😊 </p>
                        <hr/>
                    </div>

                    <a className="btn btn-primary btn-lg" href={learn_more} role="button"><strong>More Detail !</strong></a>
                </div>
                <Footer/>
            </container>
    )
}

export default RegisterExist;
