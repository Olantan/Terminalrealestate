// src/components/ListingDetails.js
import React, { useState, useEffect } from 'react';

const ListingDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://zillow56.p.rapidapi.com/property?zpid=7594920';

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '7277be807bmsh43bad68b0af3daap19206fjsnd2506339ae37',
            'x-rapidapi-host': 'zillow56.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPropertyDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!propertyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-details">
      <h1>{propertyDetails.propertyName}</h1>
      <p>{propertyDetails.propertyAddress}</p>
      <p><strong>Price:</strong> ${propertyDetails.propertyPrice}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ListingDetails;
