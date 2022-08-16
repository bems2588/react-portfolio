import "./NavBarStyles.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>

        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/13yOgbgNR8L2hRaJAjBOtzJegIu1lhVAi/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (

          <FaTimes size={20} style={{ color: "#ddd" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ddd" }} />
        )}
      </div>
    </div>
  )
}

export default Navbar;