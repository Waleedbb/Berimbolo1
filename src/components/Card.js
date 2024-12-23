import React from 'react';
import './Card.css';

const Card = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <img src={image} alt={" ):"} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
