import React from "react";
import "./about.css";

function About() {
  
  return (
    <section className="about section" id="about">
      <h2 className="section__title"> About Nilesh Mishra</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
              Hi there 👋🏽, I'm Nilesh Mishra, an M.Tech CSE student at NIT Calicut and a Full-Stack AI/ML developer with a strong background in React.js frontend engineering. I have 1.6 years of industry experience building scalable UI systems and integrating real-time APIs, along with hands-on expertise in Machine Learning, Deep Learning, NLP, and Transformers.
              I enjoy creating end-to-end intelligent systems— from designing models and experimenting with novel architectures to deploying production-ready applications. My recent work includes legal text summarization using BART and a hybrid Gaussian–sinusoidal positional encoding technique optimized with Genetic Algorithms.
              Passionate about AI research, practical engineering, and solving real-world problems, I aim to build applications where clean software design meets powerful machine learning.
              Let's connect—I'm always up for exciting collaborations, open-source contributions, or a good discussion on AI and front-end innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
