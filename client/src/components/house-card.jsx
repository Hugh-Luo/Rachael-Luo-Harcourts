import React from "react";
import $ from 'jQuery';
import lightbox from "./Lightbox";

function HouseCard(props){

    /* Htis part for card title, when card title over the limited characters*/
    let card_Title_cut = props.images.cardTitle
    if(props.images.cardTitle.length > 38)  {
       card_Title_cut = props.images.cardTitle.substring(0,38) + ' ...'
    }

    let garage = 'garage'

    if(props.images.cardFooter.garage === '0') {
        garage = 'garage hidden'
    }

   /* $(document).ready(function () {
        $('.card-footer div').addClass('hidden')
    })*/


    return (
        <div>
            <div className="card" >
                <div id={props.images.name} className="carousel slide" data-ride="carousel" data-interval='false'>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval='false'>
                            <img src={props.images.active} className="d-block w-100" alt="..." role='button' data-toggle="modal" data-target={'#modal' + props.images.id}/>
                        </div>
                        {props.images.list.map((img, index) => (
                            <div className="carousel-item"  data-interval='false' key={index} data-toggle="modal" data-target={'#modal' + props.images.id}>
                                <img src={img} className="d-block w-100" alt="..." role='button'/>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href={'#' + props.images.name} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={'#' + props.images.name} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="card-body">
                    {/*Make a tooltip*/}

                    <div className="card-title tooltip">
                        <h5>{card_Title_cut}</h5>
                        <span className='tooltiptext'>{props.images.cardTitle}</span>
                    </div>
                    <p className="address">{props.images.cardText}</p>
                    <p className='price'>{props.images.cardPrice}</p>
                </div>


                <div className="card-footer">
                    <small className="text-muted">
                        <div className='bedroom tooltip'>

                            {props.images.cardFooter.bedroom} <i className="fas fa-bed fa-1x "></i>
                            <span className='tooltiptext'>{props.images.cardFooter.bedroom + ' Bedrooms'}</span>
                        </div>

                        <div className='bath tooltip'>


                            {' ' + props.images.cardFooter.bath} <i className="fas fa-bath fa-1x "></i>
                            <span className='tooltiptext'>{props.images.cardFooter.bath + ' Bathrooms'}</span>
                        </div>

                        <div className= {garage + ' tooltip'}>

                            {' ' + props.images.cardFooter.garage} <i className="fas fa-car-alt "></i>
                            <span className='tooltiptext'>{props.images.cardFooter.garage + ' Garages car space'}</span>
                        </div>

                    </small>
                </div>
            </div>

            {/*light box */}
            {lightbox(props.images.id,props.images.active, props.images.list, props.images.name,props.images.more_detail_url)}
        </div>



    )
}

export default HouseCard;