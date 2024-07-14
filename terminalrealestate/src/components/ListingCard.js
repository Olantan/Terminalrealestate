// src/components/ListingCard.js
import React from 'react';
import './ListingCard.css';

const ListingCard = ({ image, title, price }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ListingCard;



