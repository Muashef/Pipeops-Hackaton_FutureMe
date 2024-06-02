import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/whiteLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Navigation({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const handleMoblieClick = () => {
    document.body.style.overflow = "auto";
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleScroll();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="nav">
      <div className="container nav__body desktop">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          {links.map((element, index) => {
            return (
              <li key={index}>
                <Link to={element.link}>{element.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="get-started">
          <Link to={"/"}>Get Started</Link>
        </div>

        <RxHamburgerMenu
          size={40}
          color="white"
          className="hamburger"
          onClick={handleClick}
        />
      </div>

      {isOpen && (
        <div className="mobile">
          <ul>
            {links.map((element, index) => {
              return (
                <li key={index}>
                  <Link to={element.link} onClick={handleMoblieClick}>
                    {element.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="get-started">
            <Link to={"/"}>Get Started</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
