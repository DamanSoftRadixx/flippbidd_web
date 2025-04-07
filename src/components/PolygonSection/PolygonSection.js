import React from 'react';
import { IMAGES, TEXT } from '../../utils/constants';
import PropertyController from '../../controllers/PropertyController';
import './PolygonSection.css';

const PolygonSection = () => {
  const polygonFeatures = PropertyController.getPolygonFeatures();
  
  return (
    <section className="polygon-section">
      <div className="container">
        <h2 className="polygon-title">{TEXT.POLYGON_TITLE}</h2>
        
        <div className="polygon-content d-flex">
          <div className="polygon-features">
            <div className="feature-grid">
              {polygonFeatures.map(feature => (
                <div key={feature.id} className="polygon-feature-item">
                  <img src={IMAGES.GRADIENT_TICK} alt="Check" className="polygon-feature-icon" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="polygon-map-container">
            <img src={IMAGES.POLYGON_BG} alt="Polygon Lead Map" className="polygon-map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolygonSection; 