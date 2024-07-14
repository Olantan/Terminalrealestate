// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingCard from '../components/ListingCard';
import './Home.css';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/property',
        params: { zpid: '7594920' },
        headers: {
          'x-rapidapi-key': '7277be807bmsh43bad68b0af3daap19206fjsnd2506339ae37',
          'x-rapidapi-host': 'zillow56.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setListings([response.data]); // Assuming response.data is an array of listings
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="home">
      <h1>Featured Listings</h1>
      <div className="listing-cards">
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Home;
