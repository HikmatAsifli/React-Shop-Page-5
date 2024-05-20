import React from "react";
import "./Blog.scss";
import blog1 from "../../assets/blog-01.jpg";
import blog2 from "../../assets/blog-02.jpg";
import blog3 from "../../assets/blog-03.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mt-5 mb-5 blog">
      <div className="row justify-content-center">
        <div className="section-heading">
          <span className="title-2">Latest News</span>
          <h2 className="title-3 "> The Blog</h2>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src={blog1} alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src={blog2} alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src={blog3} alt="" />
          <h3>BEST PLACES FOR WINE</h3>
          <p>
            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
          </p>
          <Link to="#">CONTINUE READING <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
