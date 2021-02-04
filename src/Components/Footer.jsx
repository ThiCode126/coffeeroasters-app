import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="content-wrapper">
        <div className="in-footer">
          <img src="assets/logo-white.svg" className="logo" alt="logo" />
          <nav className="navbar-footer">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            <Link className="link" to="/plan">
              Create You Plan
            </Link>
          </nav>
          <div className="social">
            <ReactSVG
              src="assets/icon-facebook.svg"
              className="icon"
              wrapper="span"
            />
            <ReactSVG
              src="assets/icon-twitter.svg"
              className="icon"
              wrapper="span"
            />
            <ReactSVG
              src="assets/icon-instagram.svg"
              className="icon"
              wrapper="span"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
