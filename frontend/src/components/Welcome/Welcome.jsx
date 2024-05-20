import React from "react";
import "./Welcome.scss"
import { Link } from "react-router-dom";
import story from "../../assets/our-story-01.jpg"

const Welcome = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5 ">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="text-center">
            <span className="title-2">Italian Restaurant</span>
            <h3 className="title-3 mb-5">WELCOME</h3>
            <p className="size-3 text-center m-auto mb-5">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </p>
            <Link to="#">OUR STORY <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 size-2">
            <img className="img-fluid story" src={story} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
