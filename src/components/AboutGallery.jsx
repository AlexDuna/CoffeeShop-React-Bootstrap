import React from "react";
import AboutGallery1 from '../resources/images/AboutGallery1.jpg';
import AboutGallery2 from '../resources/images/AboutGallery2.webp';
import AboutGallery3 from '../resources/images/AboutGallery3.webp';
import AboutGallery4 from '../resources/images/AboutGallery4.jpg';
import AboutGallery5 from '../resources/images/AboutGallery5.jpg';
import AboutGallery6 from '../resources/images/AboutGallery6.jpg';

export function AboutGallery(){
    return(
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Customers Gallery</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={AboutGallery1} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={AboutGallery2} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={AboutGallery3} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={AboutGallery4} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src={AboutGallery5} className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src={AboutGallery6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}