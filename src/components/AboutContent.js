import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import myPic from "../assets/mypic.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Say something about you here... or dont</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={myPic} className="img" alt="my-pic" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;