import React from 'react';
import Img from './Rachael-Img'

function Profile()  {



    const company_img = 'https://greatsouthernsecurity.com.au/wp-content/uploads/harcourts-logo.jpg'

    const sale_in_Vermont = 'https://harcourts.com.au/People/30164/Rachael-Luo?tab=for-sale'

        return (
    <div className='Profile'>
        <Img/>
        <h1>Rachael Luo</h1>
        <p>Senior Sales Consultant / Licensed Estate Agent</p>
                <div className='company_infor'>
                    <img className='company_img' src={company_img} alt='Harcourts' />
                    <a href={sale_in_Vermont} target="_Sale">Hardourts Vermont South</a>
                </div>
    </div>
        )
}

export default Profile;
