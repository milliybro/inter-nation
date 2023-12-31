import React from "react";

import logo from "../../assets/logo.svg";
import uzb from "../../assets/uzb.svg";
import user from "../../assets/user.png";
import telephone from "../../assets/telephone.png";

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header-navbar">
          <a href="#home">
            <img src={logo} alt="Inter Nation" />
          </a>
          <ul>
            <li>
              <a href="#about">Biz <br /> haqimizda</a>
            </li>
            <li>
              <a href="#team">Jamoa</a>
            </li>
            <li>
              <a href="#price">Narxlar</a>
            </li>
            <li>
              <a href="#gallery">Galereya</a>
            </li>
            <li>
              <a href="#oferta">Ommaviy  <br /> oferta</a>
            </li>
            <li>
              <a href="#work">Ish <br /> bo'yicha</a>
            </li>
          </ul>
          <div className="contact-navbar">
            <div className="contact-navbar-img">
              <img src={uzb} alt="uzb" />
            </div>
            <div className="contact-navbar-user">
              <img src={user} alt="" />
            </div>
            <div className="contact-navbar-user">
              <img src={telephone} alt="" />
            </div>
            <div className="phoneNumber">
              <a href="tel:+99878777770">
                78 <span>777 77 07</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
