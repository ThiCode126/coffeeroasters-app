import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../utils/useWindowDimensions";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isMobile } = useWindowDimensions();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const Toggle = () => {
    return (
      <div className="toggle-menu" onClick={toggleMenu}>
        {isOpenMenu ? (
          <img
            src="./assets/icon-close.svg"
            className="close-menu"
            alt="close menu"
          />
        ) : (
          <img
            src="./assets/icon-hamburger.svg"
            className="open-menu"
            alt="open menu"
          />
        )}
      </div>
    );
  };

  const Menu = () => {
    return (
      <div className={`nav nav-${isMobile ? "mobile" : "expand"}`}>
        {isMobile && <Toggle />}
        <nav className={`navbar ${isOpenMenu ? "open" : "close"}`}>
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
      </div>
    );
  };

  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">
          <img src="./assets/logo.svg" className="logo" alt="logo" />

          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
