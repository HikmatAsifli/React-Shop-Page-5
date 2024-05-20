import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="container-fluid pt-5 pb-5 subscribe">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="subscribe-box">
              <h2>Special Sign Up</h2>
              <input type="email" placeholder="subscribe" />
              <button className="btn btn-dark">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
