// src/components/ListingCard.js
import React from 'react';
import './ListingCard.css';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.image} alt={listing.title} />
      <div className="listing-details">
        <h2>{listing.title}</h2>
        <p>{listing.description}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
