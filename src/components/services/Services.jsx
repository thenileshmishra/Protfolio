import React from "react";
import "./services.css";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <img src="https://via.placeholder.com/300x200" alt="Project 1" className="services__img" />
            <h3 className="services__title">E-commerce Website</h3>
            <p className="services__description">
              A full-stack e-commerce platform with React, Node.js, and MongoDB
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noopener noreferrer" className="services__button">
              GitHub
              <i className="uil uil-github services__button-icon"></i>
            </a>
            <a href="https://ecommerce-demo.com" target="_blank" rel="noopener noreferrer" className="services__button">
              Live Demo
              <i className="uil uil-external-link-alt services__button-icon"></i>
            </a>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src="https://via.placeholder.com/300x200" alt="Project 2" className="services__img" />
            <h3 className="services__title">Task Management App</h3>
            <p className="services__description">
              A task management application built with React and Firebase
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer" className="services__button">
              GitHub
              <i className="uil uil-github services__button-icon"></i>
            </a>
            <a href="https://task-manager-demo.com" target="_blank" rel="noopener noreferrer" className="services__button">
              Live Demo
              <i className="uil uil-external-link-alt services__button-icon"></i>
            </a>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src="https://via.placeholder.com/300x200" alt="Project 3" className="services__img" />
            <h3 className="services__title">Weather Dashboard</h3>
            <p className="services__description">
              A weather application using React and OpenWeather API
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer" className="services__button">
              GitHub
              <i className="uil uil-github services__button-icon"></i>
            </a>
            <a href="https://weather-demo.com" target="_blank" rel="noopener noreferrer" className="services__button">
              Live Demo
              <i className="uil uil-external-link-alt services__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
