import React from "react";
import "./Review.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../assets/avatar-01.jpg";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container review">
      <div className="row justify-content-center">
        <div className="section-heading">
          <span className="title-2">Customer Say</span>
          <h2 className="title-3 "> Review</h2>
        </div>
      </div>
      <div className="row mt-5 m-auto">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="avatar-item mb-5">
                <img className="avatar" src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
