import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import LeadSection from '../../components/LeadSection/LeadSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import PolygonSection from '../../components/PolygonSection/PolygonSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <LeadSection />
      <FeatureSection />
      <PolygonSection />
    </div>
  );
};

export default HomePage; 