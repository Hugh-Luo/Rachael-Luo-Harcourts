import React from 'react';

import Header from "./header";

import Footer from "./footer";

import Content from "./content";

function Home() {
    return(
        <div>
            <Header/>
            <Content/>
            <Footer id='home_footer'/>
        </div>
    )
}

export default Home;