import React from 'react';

function lightbox(target_id,images_active, images_remain, list_name, more_detail_url) {


    return (
        <section>

            {/*Modal*/}
            <div className="modal fade" id={'modal'+target_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{list_name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div id={'modal-' + list_name} className="carousel slide" data-ride="carousel" data-interval='false'>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval='false'>
                                        <img src={images_active} className="d-block w-100" alt="..." role='button' />
                                    </div>
                                    {images_remain.map((img, index) => (
                                        <div className="carousel-item"  data-interval='false' key={index}>
                                            <img src={img} className="d-block w-100" alt="..." role='button'/>
                                        </div>
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href={'#modal-' + list_name} role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href={'#modal-' + list_name} role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <div className="modal-footer">
                            {/* MOre detail to another url*/}
                            <a href={more_detail_url} target='more_details'><button type="button" className="btn btn-primary">More detail</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default lightbox;