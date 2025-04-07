import React, { useState } from 'react';
import { IMAGES, TEXT } from '../../utils/constants';
import PropertyController from '../../controllers/PropertyController';
import './HeroSection.css';

const HeroSection = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!address.trim()) return;

    setLoading(true);
    try {
      const result = await PropertyController.searchProperties(address);
      console.log(result);
      // Here you would handle the search results, e.g., redirect to results page or show results
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${IMAGES.HOME_BG})` }}>
      <div className="overlay"></div>
      
      <div className="video-call-container">
        <img src={IMAGES.VIDEO_CALL_BG} alt="Video Call" className="video-call-image" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{TEXT.TAGLINE}</h1>
          
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <div className="search-icon">
                  <i className="fas fa-search"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search Property..."
                  className="search-input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit" className="search-button" disabled={loading}>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Download Section - Bottom */}
      <div className="container">
        <div className="download-section">
          <p className="download-text">{TEXT.FREE_DOWNLOAD}</p>
          <div className="app-buttons">
            <a href="https://apps.apple.com" className="app-button">
              <img src={IMAGES.APPLE_STORE} alt="App Store" />
            </a>
            <a href="https://play.google.com" className="app-button">
              <img src={IMAGES.GOOGLE_PLAY} alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 