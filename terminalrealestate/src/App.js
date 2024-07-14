// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './components/ListingDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property-details" element={<ListingDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
