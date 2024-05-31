import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logo.png";
export function Footer() {
  return (
    <div className="footer ">
      <div className="container">
        <h3>Ready to discover your Future?</h3>
        <div className="footer__link">
          <Link to={"/"} className="get-started">
            Get Started
          </Link>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          {" "}
          <Link to={"/"}>
            <img src={logo} alt="Logo Image" />
          </Link>
          <div className="icons">
            <Link to={"/twitter"}>
              <FaTwitter size={30} />
            </Link>
            <Link to={"/facebook"}>
              <FaFacebookF size={30} />
            </Link>
            <Link to={"/ig"}>
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
