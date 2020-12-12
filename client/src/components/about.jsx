import React from 'react';

import Header from "./header";

import Footer from "./footer";

import ForwardIcon from '@material-ui/icons/Forward';

function About() {

    const info1 = "Rachael is one of Harcourts Victoria’s top 10 sales consultants, experienced in both sales and management."

    const info2 = "Having moved to Australia after founding a highly-successful English tutoring business in China, Rachael lives locally and has a broad knowledge of the real estate market in the eastern and surrounding suburbs. Her extensive experience in both Australia and China gives her the advantage of understanding sellers and buyers from both cultures."

    const info3 = 'Rachael works hard to achieve the best result for her clients. Genuinely interested in both the seller\'s and buyer\'s needs, her excellent communication and negotiation skills allow her to match buyers to sellers and achieve fantastic results. Rachael has also built a strong reputation for her expert advice and keeping her clients informed throughout the whole selling process.'

    const info4 = 'Rachael has a love of learning and recently obtained a Master’s of Business from Monash University. On her days off, she enjoys walking in the Dandenongs with her husband and daughter.'

    const More = 'https://harcourts.com.au/People/30164/Rachael-Luo?tab=sold'
    return(
    <div>
        <Header/>
        <div className='about'>
            <h1 className='about-title'> About Me</h1>
            <div className='about-me'>

                <p>{info1}</p>
                <p>{info2}</p>
                <p>{info3}</p>
                <p>{info4}</p>

            </div>
            <a href={More} target='about'> <button type="button" className="btn btn-secondary btn-lg">More <ForwardIcon/></button></a>

        </div>

        <Footer/>
    </div>
    )
}

export default About;
