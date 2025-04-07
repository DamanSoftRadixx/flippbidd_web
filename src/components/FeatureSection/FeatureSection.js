import React from 'react';
import { IMAGES, TEXT } from '../../utils/constants';
import PropertyController from '../../controllers/PropertyController';
import './FeatureSection.css';

const FeatureSection = () => {
  const features = PropertyController.getKeyFeatures();
  
  return (
    <section className="feature-section" style={{ backgroundImage: `url(${IMAGES.FEATURE_BG})` }}>
      <div className="container">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">
              <span className="highlight">FlippBidd</span> Key Features
            </h2>
            
            <ul className="feature-list">
              {features.map(feature => (
                <li key={feature.id} className="feature-item">
                  <img src={IMAGES.GRADIENT_TICK} alt="Check" className="feature-icon" />
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 