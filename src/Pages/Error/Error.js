import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div>
      <div className="error-div">
        <img
          className="img-fluid"
          src="https://i.ibb.co/99pjwGX/error.jpg"
          alt=""
        />
      </div>
      <center>
        <NavLink to="/">
          <button type="button" class="btn btn-primary">
            GO BACK TO HOME PAGE
          </button>
        </NavLink>
      </center>
    </div>
  );
};

export default Error;
