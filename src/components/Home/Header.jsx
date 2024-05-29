import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/hone_bg.png";


export function Header() {
  return (
    <div className="header">
      <img src={background} className="header__bg" alt="" />
      <div>
        <p>Discover Your Future</p>
        <h1>Career Path Unlock</h1>

        <Link to={"/"}>Learn More</Link>
      </div>
    </div>
  );
}
