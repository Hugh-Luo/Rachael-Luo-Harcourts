import React from 'react';

import Header from "./header";
import Footer from "./footer";
function Register_fail()  {


    return(
        <container className='Failure-register'>
            <Header/>
            <div className="jumbotron">
                <div className='row'>
                    <section className='expression col'>
                        <h1 className="display-4">Failure </h1>

                        <div className='content'>
                            <p className="lead"> Join this big Family 😄!  You will receive the lastest information of the Market</p>
                            <hr/>
                        </div>

                        <a className="btn btn-primary btn-lg" href='/register' role="button"><strong>Try Again !</strong></a>
                    </section>

                    <section>
                        <div className='Gifs col'>
                            <img src='http://www.reactiongifs.com/r/sbbn.gif' alt='Failure to register'/>
                        </div>
                    </section>
                </div>

            </div>
            <Footer/>
        </container>
    )
}

export default Register_fail;
