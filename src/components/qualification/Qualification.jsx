import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <div 
            className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div 
            className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        {/* Education Content */}
        <div className={toggleState === 1 ? "qualification__content qualification__active" : "qualification__content"}>
          <div className="qualification__data">
            <div className="qualification__item">
              <h3 className="qualification__title">Masters of Technology in Computer Science Engineering</h3>
              <span className="qualification__subtitle">
                National Institute of Technology, Calicut — Kerala, India
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> Aug 2024 – May 2026
              </div>
              
            </div>

            <div className="qualification__item">
              <h3 className="qualification__title">Bachelor of Technology in Computer Science Engineering</h3>
              <span className="qualification__subtitle">
                Amity University, Kolkata — West Bengal, India
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> Aug 2017 – May 2021
              </div>
              
            </div>
          </div>
        </div>

        {/* Experience Content */}
        <div className={toggleState === 2 ? "qualification__content qualification__active" : "qualification__content"}>
          <div className="qualification__data">
            

            <div className="qualification__item">
              <h3 className="qualification__title">Front End Developer (React Js)</h3>
              <span className="qualification__subtitle">
                UBK Infotech Pvt Ltd — Kolkata, India
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> Aug 2022 – Jan 2024
              </div>
           
            </div>
            <div className="qualification__item">
              <h3 className="qualification__title">React Js Mentor</h3>
              <span className="qualification__subtitle">
                Sunrise Mentors Private Limited (Coding Ninjas) — Gurugram, India
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> Aug 2023 – Nov 2023
              </div>
             
            </div>

            <div className="qualification__item">
              <h3 className="qualification__title">Machine Learning Intern</h3>
              <span className="qualification__subtitle">
                Web Prism IT Solutions — Kolkata, India
              </span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> May 2020 – June 2020
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
