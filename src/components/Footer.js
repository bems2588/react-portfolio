import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#ddd", marginRight: "2rem" }} />
            <div>
              <p>Raleigh NC</p>
              <p>United States</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#ddd", marginRight: "2rem" }} />
              301-537-9932</h4>

          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#ddd", marginRight: "2rem" }} />
              bems2588@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>I'm an enthusiastic - self-driven junior Front-End Developer based in Raleigh, North Carolina.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ddd", marginRight: "2rem" }} />
            <FaLinkedin
              size={30}
              style={{ color: "#ddd", marginRight: "2rem" }} />
            <FaGithub
              size={30}
              style={{ color: "#ddd", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;