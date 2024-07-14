// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingCard from '../components/ListingCard';
import './Home.css';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://zillow56.p.rapidapi.com/property',
          params: { zpid: '7594920' },
          headers: {
            'x-rapidapi-key': '7277be807bmsh43bad68b0af3daap19206fjsnd2506339ae37',
            'x-rapidapi-host': 'zillow56.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        console.log(response.data);

        // Assuming response.data contains the property details
        setListings([response.data]); // Update state with fetched listing data

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="home">
      {/* Use listings[0] because we're assuming only one property is fetched */}
      {listings.length > 0 && (
        <ListingCard
          key={listings[0].zpid} // Use a unique identifier as the key
          image={listings[0].image} // Replace with the actual property name from your API that contains the image URL
          title={listings[0].title} // Replace with the actual property name from your API that contains the title
          price={listings[0].price} // Replace with the actual property name from your API that contains the price
        />
      )}
    </div>
  );
};

export default Home;
