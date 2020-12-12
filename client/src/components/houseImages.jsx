import React from 'react';
import house_images from "../house-Imgs";
import HouseCard from "./house-card";


function housesList (){
    return (
        <section id='houseImgs'>
            <div className='container'>
                <div className='row '>
                    {house_images.map((img,index) => (
                        <div className="col-lg-4 col-md-6 loc" key={index}>
                            <HouseCard images={img} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default housesList;