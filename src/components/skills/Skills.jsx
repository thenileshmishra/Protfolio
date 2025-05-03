import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <div className="skills__container container grid">
        <div className="skills__content">
          <div className="skills__section">
            <h3 className="skills__title">Machine Learning</h3>
            <div className="skills__paragraph">
              <div className="skills__data">
                <i className="bx bx-brain"></i>
                <div>
                  <h3 className="skills__name">Deep Learning</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-network-chart"></i>
                <div>
                  <h3 className="skills__name">Neural Networks</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-chart"></i>
                <div>
                  <h3 className="skills__name">NLP</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-data"></i>
                <div>
                  <h3 className="skills__name">TensorFlow</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-line-chart"></i>
                <div>
                  <h3 className="skills__name">PyTorch</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-code-alt"></i>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__section">
            <h3 className="skills__title">Fullstack Development</h3>
            <div className="skills__paragraph">
              <div className="skills__data">
                <i className="bx bxl-react"></i>
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-nodejs"></i>
                <div>
                  <h3 className="skills__name">Node.js</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-mongodb"></i>
                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-javascript"></i>
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-html5"></i>
                <div>
                  <h3 className="skills__name">HTML5</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-css3"></i>
                <div>
                  <h3 className="skills__name">CSS3</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
