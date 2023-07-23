import React from "react";
import Button from "../Buttons/Button";
import searchIcon from "../../assets/icons/search.svg";
import sneakerBanner from "../../assets/sneakerBanner.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <form action="#" className="hero__form">
        <input type="text" placeholder="Categories" />
        <Button
          style={{ backgroundColor: "#EA524D", border: "none" }}
          className="search-btn"
        >
          <img src={searchIcon} alt="search icon" />
        </Button>
      </form>
      <div className="hero__banner">
        <div className="banner-image">
          <img src={sneakerBanner} alt="" />
        </div>
        <span>Lorem ipsum dolor sit amet consectetur. Egestas aliquet suspendisse sed sed nibh suspendisse pulvinar amet pharetra. Volutpat viverra aliquet.</span>
      </div>
    </section>
  );
};

export default Hero;
