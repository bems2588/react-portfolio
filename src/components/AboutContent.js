import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import myPic from "../assets/mypic.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a junior Front-End Developer based in Raleigh, North Carolina.<p>I like to explore my creativity and to build amazing things!</p>I'm easily inspired and programming is my new passion.  </p>
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