import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission (send to API, email service, etc.)
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="uil uil-map-marker contact__card-icon"></i>
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">Calicut, Kerala</span>
            </div>

            <div className="contact__card">
              <i className="uil uil-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <a href="mailto:thenileshmishra@gmail.com" className="contact__button">
                Write me
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/thenileshmishra" target="_blank" rel="noopener noreferrer" className="contact__button">
                Connect
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-github contact__card-icon"></i>
              <h3 className="contact__card-title">GitHub</h3>
              <a href="https://github.com/thenileshmishra" target="_blank" rel="noopener noreferrer" className="contact__button">
                Follow
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>

          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Subject</label>
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
