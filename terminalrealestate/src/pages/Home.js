import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingCard from '../components/ListingCard';
import './Home.css';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/search_url',
        params: {
          url: 'https://www.zillow.com/homes/for_sale/2_p/?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-112.39143704189931%2C%22east%22%3A-110.78468655361806%2C%22south%22%3A32.79032628812945%2C%22north%22%3A33.7227901388417%7D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22con%22%3A%7B%22value%22%3Afalse%7D%2C%22apa%22%3A%7B%22value%22%3Afalse%7D%2C%22mf%22%3A%7B%22value%22%3Afalse%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22land%22%3A%7B%22value%22%3Afalse%7D%2C%22manu%22%3A%7B%22value%22%3Afalse%7D%2C%22apco%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%7D',
          page: '3',
          output: 'json',
          listing_type: 'by_agent'
        },
        headers: {
          'x-rapidapi-key': '7277be807bmsh43bad68b0af3daap19206fjsnd2506339ae37',
          'x-rapidapi-host': 'zillow56.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setListings(response.data); // Assuming response.data is an array of listings
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., set an error state or display a message)
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="home">
      {listings.length > 0 ? (
        listings.map((listing, index) => (
          <ListingCard
            key={index}
            image={listing.image} // Replace with actual data keys
            title={listing.title}
            price={listing.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
