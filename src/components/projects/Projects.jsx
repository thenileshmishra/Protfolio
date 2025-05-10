import React from "react";
import "./projects.css";
import ipodmini from "../../assets/ipod1.png";
import dsa from "../../assets/dsa.png";
import llmseqrec from "../../assets/LLMSecReq.png";

function Projects() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <img src={ipodmini} alt="iPod Mini Project" className="services__img" />
            <h3 className="services__title">Ipod Mini Project</h3>
            <p className="services__description">
            A web-based classic iPod simulator built with React that replicates the iconic iPod interface and functionality.
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/thenileshmishra/CodingNinjaiPodMiniProject" target="_blank" rel="noopener noreferrer" className="services__button">
              GitHub
              <i className="uil uil-github services__button-icon"></i>
            </a>
            <a href="https://ipodminiapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="services__button">
              Live Demo
              <i className="uil uil-external-link-alt services__button-icon"></i>
            </a>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src={dsa} alt="DSA Cracker Project" className="services__img" />
            <h3 className="services__title">DSA Cracker Project</h3>
            <p className="services__description">
            A modern web application to help you track and solve Data Structures and Algorithms (DSA) problems efficiently. Built with React and designed to provide a seamless learning experience.
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/thenileshmishra/dsa-cracker" target="_blank" rel="noopener noreferrer" className="services__button">
              GitHub
              <i className="uil uil-github services__button-icon"></i>
            </a>
            <a href="https://thenileshmishra.github.io/dsa-cracker/" target="_blank" rel="noopener noreferrer" className="services__button">
              Live Demo
              <i className="uil uil-external-link-alt services__button-icon"></i>
            </a>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src={llmseqrec} alt="LLMSeqRec Project" className="services__img" />
            <h3 className="services__title">LLMSeqRec</h3>
            <p className="services__description">
              LLM Sequence Recommendation System which is trained using MovieLens 20M dataset and BART model for Embedding.
            </p>
          </div>

          <div className="services__links">
            <a href="https://github.com/thenileshmishra/LLMSeqRec" target="_blank" rel="noopener noreferrer" className="services__button">
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

export default Projects;
