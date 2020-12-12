import React from 'react';

import Header from "./header";
import Footer from "./footer";
function registerSuccess()  {

    const learn_more = 'https://harcourts.com.au/People/30164/Rachael-Luo?tab=for-sale'

    return(
        <container className='Succesfully_registe'>
            <Header/>
            <div className="jumbotron">
                <h1 className="display-4">Successful 🎄</h1>
                <div className='content'>
                    <p className="lead"> Welcome to join this big Family 😄!  You will receive the lastest information of the Market</p>

                </div>

                <a className="btn btn-primary btn-lg" href={learn_more} role="button">Learn more</a>
            </div>
            <Footer/>
        </container>


    )
}

export default registerSuccess;
