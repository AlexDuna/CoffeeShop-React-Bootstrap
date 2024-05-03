import React from "react";
import Gallery1 from '../resources/images/Gallery1.jpg';
import Gallery2 from '../resources/images/Gallery2.jpg';
import Gallery3 from '../resources/images/Gallery3.jpg';
import Gallery4 from '../resources/images/Gallery4.jpg';
import Gallery5 from '../resources/images/Gallery5.png';
import Gallery6 from '../resources/images/Gallery6.png';

export function ImageGallery(){
    return(
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery2} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery3} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery4} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={Gallery5} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}