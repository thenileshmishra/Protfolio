import React, { useState } from "react";
import "./header.css";
import LOGO from "../../assets/LOGO.png"; 


const Header = () => {
  /* ================== Toogle Menu ================== */
  const [Toggle, showMenu] = useState(false);

  console.log(Toggle);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
        <img src={LOGO} alt="Logo" className="nav__logo-img" /> 
        </a>

        <div className={Toggle ? "nav__menu show_menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-graduation-cap nav__icon"></i>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps nav__open"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
