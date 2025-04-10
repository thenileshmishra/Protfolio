import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo">Portfolio</Link>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">Skills</Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link">Services</Link>
            </li>
            <li className="nav__item">
              <Link to="/qualification" className="nav__link">Qualification</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 