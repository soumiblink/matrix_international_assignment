import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">MindFlow AI</span>
        </div>

        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;