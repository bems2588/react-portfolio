import "./NavBarStyles.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const


  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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

export default Navbar