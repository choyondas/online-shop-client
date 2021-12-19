import React from 'react';
import "./Subscribe.css"
const Subscribe = () => {
    return (
        <div className=" subscribe text-center">
            <div className="container">


                <p style={{ color: "#cb9410" }} >Daily Information</p>

                <h2 style={{ fontSize: '40px', padding: '10px' }}>Subscribe To Our Newsletter</h2>
                <small>Get 40 % discount storewide just by subscribing to our weekly newsletter</small>

                <div class="input-group mb-3 w-50 mx-auto pt-4">
                    <input type="text" class="form-control" placeholder="Email" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;