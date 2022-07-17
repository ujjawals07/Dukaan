import React from "react";
import Cart from "../img/cart.jpg";
import { FaHamburger, FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={Cart} className="nav-logo-img" />
            <h1>Dukaan</h1>
          </div>
          <div className="nav-items">
            <li className="nav-item">
              Products <span className="u">&#10095;</span>
            </li>
            <li className="nav-item">
              Company <span>&#10095;</span>
            </li>
            <li className="nav-item">
              Pricing <span>&#10095;</span>
            </li>
          </div>
        </div>
        <div className="nav-login">
          <button className="nav-login-btn">Sign in</button>
          <button className="nav-start-btn">Start free trail</button>
          <div className="hamburger">
            <FaBars size={25} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
