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
              <HashLink to="#about">About me</HashLink>
            </p>
            <p>
              <HashLink to="#services">services</HashLink>
            </p>
            <p>
              <HashLink to="#">blogs</HashLink>
            </p>
            <p>
              <Link to="portifolio">Portifolio</Link>
            </p>
            <p>
              <HashLink to="#contact">contact me</HashLink>
            </p>
          </div>
          <div className="footerMedias">
            <div className="footerMedia">
              <a href="https://www.linkedin.com/in/laura-irene-paul">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="https://www.facebook.com/irene.mmassy.1466">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="https://www.instagram.com/minaheryy/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="https://www.behance.net/laummassy01ce">
                <i className="fab fa-behance"></i>
              </a>
            </div>
            <div className="footerMedia">
              <a href="https://github.com/irenemmassy">
                <i className="fab fa-github-alt"></i>
              </a>
            </div>
          </div>
          <span>Copyright ©2020 All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}
