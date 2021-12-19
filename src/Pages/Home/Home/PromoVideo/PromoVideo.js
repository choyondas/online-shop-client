import { Button } from '@mui/material';
import React from 'react';
import './PromoVideo.css'
import video from "../../../../video/watch-promotion.mp4"
const PromoVideo = () => {
    return (
        <div className="Promo ">
            <div className="p-5">

                <h2 style={{ color: 'white', padding: '10px' }}>
                    this is promo video section
                </h2>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <video width="100%" height="100%" controls >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white eng ">
                        <div className="p-5">
                            <p style={{ color: "yellow" }}>See Our Profile</p>
                            <h1 style={{ fontSize: '50px' }}> Specialist Engineering For Every Industry</h1>
                            <br />
                            <Button variant="contained">Learn More</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromoVideo;