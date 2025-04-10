import React from 'react';
import './card.css';

const Card = ({ icon, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card__container">
      <div>
        <i className={`${icon} card__icon`}></i>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>

      {buttonText && (
        <span className="card__button" onClick={onButtonClick}>
          {buttonText}
          <i className="uil uil-arrow-right card__button-icon"></i>
        </span>
      )}
    </div>
  );
};

export default Card; 