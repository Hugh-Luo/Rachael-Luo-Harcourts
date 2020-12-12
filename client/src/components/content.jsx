import React from 'react';


import Profile from "./Rachael-Luo-Profile";

import housesList from "./houseImages";


function Content() {


    return (
        /*Used for Rachael information !*/
        <div>
            <Profile/>
            <section id='HousesList'>
                <div className='title'>
                    <h1>It is wating for you !</h1>
                </div>
                {housesList()}

            </section>
        </div>

    )
}


export default Content;
