import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="container ">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/basket" className="nav-link px-2 link-secondary">
              Basket
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 link-secondary">
              Reservation
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 link-secondary">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 link-secondary">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 link-secondary">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 link-secondary">
              Contact
            </Link>
          </li>
          <li>
              <Link to="#" className="nav-link px-2 link-secondary">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 link-secondary">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 link-secondary">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
        </ul>

        <Link
          className="btn btn-light"
          data-bs-toggle="offcanvas"
          to="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <i className="fa-solid fa-bars"></i>
        </Link>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
};

export default Header;
