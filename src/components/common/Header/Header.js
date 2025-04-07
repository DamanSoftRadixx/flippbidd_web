import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, ROUTES } from '../../../utils/constants';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle scroll event to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu when resizing to desktop view
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Only show menu toggle on small screens
  const showMenuToggle = windowWidth <= 768;

  return (
    <header className={`header ${scrolled ? 'sticky' : ''}`}>
      <div className="container">
        <div className="header-content d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to={ROUTES.HOME}>
              <img src={IMAGES.LOGO} alt="FlippBidd Logo" className="logo-img" />
            </Link>
          </div>
          
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''} ${showMenuToggle ? 'hide-mobile' : ''}`}>
            <ul className="nav-list d-flex">
              <li className="nav-item"><Link to={ROUTES.HOME} className="nav-link active">Home</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">7 Day Trial</Link></li>
              <li className="nav-item"><Link to="#" className="nav-link">Submit Property</Link></li>
              <li className="nav-item demo-btn-container mobile-only">
                <Link to="#" className="btn demo-btn">Book a Demo</Link>
              </li>
              <li className="nav-item auth-btn-container mobile-only">
                <Link to="#" className="btn btn-primary-gradient">Sign Up</Link>
              </li>
              <li className="nav-item auth-btn-container mobile-only">
                <Link to="#" className="btn btn-primary-gradient">Log In</Link>
              </li>
            </ul>
          </nav>
          
          <div className="header-buttons">
            <div className="demo-btn-container desktop-only">
              <Link to="#" className="btn demo-btn">Book a Demo</Link>
            </div>
            <div className="auth-buttons desktop-only">
              <Link to="#" className="btn btn-primary-gradient">Sign Up</Link>
              <Link to="#" className="btn btn-primary-gradient">Log In</Link>
            </div>
            
            {showMenuToggle && (
              <div className="mobile-menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 