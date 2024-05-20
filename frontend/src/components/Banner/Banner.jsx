import React from "react";
import "./Banner.scss";
import banner1 from "../../assets/master-slides-01.jpg";
import banner2 from "../../assets/master-slides-02.jpg";
import banner3 from "../../assets/master-slides-03.jpg";

const Banner = () => {
  return (
    <div id="carouselExample" className="banner carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <span>Welcome to</span>
            <h2>Pato Place</h2>
            <button className="btn btn-light">Look Menu</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <span>Welcome to</span>
            <h2>Pato Place</h2>
            <button className="btn btn-light">Look Menu</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <span>Welcome to</span>
            <h2>Pato Place</h2>
            <button className="btn btn-light">Look Menu</button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
