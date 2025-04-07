import React from 'react';
import { IMAGES, TEXT } from '../../utils/constants';
import './LeadSection.css';

const LeadSection = () => {
  return (
    <section className="lead-section">
      <div className="container">
        <h2 className="section-title">{TEXT.EXPOSURE_TITLE}</h2>
        
        <div className="lead-options">
          <div className="lead-option">
            <img src={IMAGES.LEAD_ZOLO} alt="Lead Zolo" className="lead-image" />
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="lead-option">
            <img src={IMAGES.US_PROBATE} alt="US Probate Leads" className="lead-image" />
          </div>
        </div>
        
        <div className="text-center">
          <a href="/" className="btn-gradient">Click Here</a>
        </div>
      </div>
    </section>
  );
};

export default LeadSection; 