import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <Link to="/">
               Greivin Cruz
                
              </Link>
              {/* <a href="/">Alex Smith</a> */}
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <Link to="/">
                  <i className="bx bx-home"></i> <span>Home</span>
                  {/* <a href="/" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a> */}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="bx bx-user"></i> <span>About me</span>
                </Link>
                {/* <a href="/about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a> */}
              </li>
              <li>
                <Link to="/resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </Link>
                {/* <a href="/resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a> */}
              </li>
              <li>
                <Link to="/portfolio">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </Link>
                {/* <a href="/portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a> */}
              </li>
              <li>
                <Link to="/testimonial">
                  <i className="bx bx-cool"></i> <span>Testimonial</span>
                </Link>
                {/* <a href="/testimonial" className="nav-link scrollto">
                  <i className="bx bx-cool"></i> <span>Testimonial</span>
                </a> */}
              </li>
              <li>
                <Link to="/services">
                  <i className="bx bx-server"></i> <span>Services</span>
                </Link>
                {/* <a href="/services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a> */}
              </li>
              <li>
                <Link to="/news">
                  <i className="bx bx-news"></i> <span>News</span>
                </Link>
                {/* <a href="/services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a> */}
              </li>
              <li>
                <Link to="/contact">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </Link>
                {/* <a href="/contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a> */}
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </div>
  );
};

export default Header;
