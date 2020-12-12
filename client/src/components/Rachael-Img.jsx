import React from 'react'  ;

function Img() {
    const photo_url ='https://photos.harcourts.com.au/V2/000/040/551/383-Rachael-Luo.jpg'

    return (
        <div id='Rachael-Image' className='control-img'>
            <div className='img-container'>
                <img className='Person_img' src={photo_url} alt="Rachael-Luo" width="100" height="100" />
            </div>
        </div>
    )
}

export default Img;