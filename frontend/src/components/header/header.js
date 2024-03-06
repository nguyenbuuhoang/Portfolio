import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function header(props) {
  return (
    <header className={`header-${props.bgColor || "white"}`}>
      <div className="container">
        <div className="nav">
          <div className="nav1">
            <Link to={"/"}>
              <img src="/images/gifs/logo.png" alt="Logo"></img>
            </Link>
          </div>
          <div className="nav2">
            <div className="menu">
              <HashLink to="#">Home</HashLink>
            </div>
            <div className="menu">
              <HashLink to="#about">about Me</HashLink>
            </div>
            <div className="menu">
              <HashLink to="#services">services</HashLink>
            </div>
            <div className="menu">
              <HashLink to="#works">Work</HashLink>
            </div>
            <div className="menu">
              <HashLink to="#contact">contact Me</HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
