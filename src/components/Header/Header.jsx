import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import heartIcon from "../../assets/icons/heart-Fill.svg";
import shoppingCart from "../../assets/icons/cart.svg";
const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <Link to="/">
          <img className="logo" src="src/assets/logoBlack.svg" alt="" />
        </Link>
        <div className="right">
          <nav className="primary-navigation">
            <ul role="list" className="nav-list">
              <li className="list-item">Home</li>
              <li className="list-item">About Us</li>
              <li className="list-item">Shop</li>
              <li className="list-item">Contact</li>
              <li className="list-item">Blog</li>
              <li className="list-item">SAV</li>
            </ul>
          </nav>
          <img className="fillheart-icon" src={heartIcon} alt="heart icon" />
          <img className="cart-icon" src={shoppingCart} alt="shopping cart" />
          <div className="hamburger-menu">
            <img src="src/assets/icons/hamburgerMenu.svg" alt="" />
          </div>
          <Button
            style={{
              borderRadius: "0.25em",
              fontSize: "1rem",
              color: "white",
              backgroundColor: "#EB5B56",
              padding: "0.75em 1.5em",
              border: "none",
              boxShadow: "0 5px 10px #a7a6a6",
            }}
            className="login-btn"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
