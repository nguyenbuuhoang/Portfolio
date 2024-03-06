import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerContainer">
          <div className="footerLogo">
            <img src="/images/gifs/logo.png" alt="Logo" />
          </div>
          <div className="footerNav">
            <p>
              <HashLink to="#">Home</HashLink>
            </p>
            <p>
              <HashLink to="#about">About me</HashLink>
            </p>
            <p>
              <HashLink to="#services">services</HashLink>
            </p>
            <p>
              <HashLink to="#works">work</HashLink>
            </p>
            <p>
              <HashLink to="#contact">contact me</HashLink>
            </p>
          </div>
          <div className="footerMedias">
            <div className="footerMedia">
              <a href="https://www.facebook.com/buuhoang.nguyen.37/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="https://github.com/nguyenbuuhoang">
                <i className="fab fa-github-alt"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <span>Copyright ©2024 All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}
