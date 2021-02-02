import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../utils/useWindowDimensions";

import svgLogo from "../assets/logo.svg";
import svgOpen from "../assets/icon-hamburger.svg";
import svgClose from "../assets/icon-close.svg";

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
          <img src={svgClose} className="close-menu" alt="close menu" />
        ) : (
          <img src={svgOpen} className="open-menu" alt="open menu" />
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
          <img src={svgLogo} className="logo" alt="logo" />

          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
