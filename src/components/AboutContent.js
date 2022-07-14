import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import myPic from "../assets/mypic.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a junior Front-End Developer based in Raleigh, North Carolina.<p>I'm easily inspired and I love to explore my creativity.</p>Programming is my new passion and I like to build amazing things.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        {/* <div className="img-container"> */}
        <img src={myPic} className="img" alt="my-pic" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutContent;