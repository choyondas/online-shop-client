import React from 'react';
import "./Designer.css"
const Designer = () => {
    return (
        <div className="designer">
            <div className="container">
                <div className="row design">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="https://i.ibb.co/8NDh1M8/designer-removebg-preview.png" alt="" />
                    </div>
                    <div className="pt-5 col-lg-6 ">
                        <p style={{ color: "yellow" }}>People Behind Product</p>
                        <h1 style={{ fontSize: "50px" }}>Our Special Designer</h1>
                        <p>The most famous of all modern watch designers, Gerald Genta, passed away in 2011 but many of his creations still dominate the high-end watch space today. Not only did Genta design the Royal Oak for Audemars Piguet in 1972, but he also created the Nautilus for Patek Philippe in 1976. With their integrated bracelets, stainless steel construction, and boldly shaped cases, the Royal Oak and the Nautilus were seminal in the creation and evolution of the high-end sports watch category.</p>
                        <img className="img-fluid w-25" src="https://i.ibb.co/KzsC4tB/Background-6.png" alt="" />
                        <h4>Anthony Malia</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;
