import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <div className="skills__container container grid">
        <div className="skills__content">
          {/* Machine Learning / AI Skills */}
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
                <i className="bx bx-message-square-detail"></i>
                <div>
                  <h3 className="skills__name">NLP</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-network-chart"></i>
                <div>
                  <h3 className="skills__name">LLMs</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-transfer"></i>
                <div>
                  <h3 className="skills__name">Transformers</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-image"></i>
                <div>
                  <h3 className="skills__name">Computer Vision</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Stack Development */}
          <div className="skills__section">
            <h3 className="skills__title"> Full Stack Development</h3>
            <div className="skills__paragraph">
              <div className="skills__data">
                <i className="bx bxl-react"></i>
                <div>
                  <h3 className="skills__name">React.js</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-code-block"></i>
                <div>
                  <h3 className="skills__name">Node Js</h3>
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
              <div className="skills__data">
                <i className="bx bxl-bootstrap"></i>
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="skills__section">
            <h3 className="skills__title">Tools & Frameworks</h3>
            <div className="skills__paragraph">
              <div className="skills__data">
                <i className="bx bxl-python"></i>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-code-curly"></i>
                <div>
                  <h3 className="skills__name">C++/C</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-data"></i>
                <div>
                  <h3 className="skills__name">PyTorch</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-line-chart"></i>
                <div>
                  <h3 className="skills__name">TensorFlow</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-data"></i>
                <div>
                  <h3 className="skills__name">Scikit-Learn</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-data"></i>
                <div>
                  <h3 className="skills__name">Pandas</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-math"></i>
                <div>
                  <h3 className="skills__name">NumPy</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bxl-github"></i>
                <div>
                  <h3 className="skills__name">Git & GitHub</h3>
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
