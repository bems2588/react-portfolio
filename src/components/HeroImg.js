import "./HeroImgStyle.css";

import React from 'react';
import IntroImg from "../assets/intro-img.webp"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Welcome to my portfolio!</p>
        <h1>Bruno Marcenaro</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>

        </div>
      </div>
    </div>
  )
};

export default HeroImg;