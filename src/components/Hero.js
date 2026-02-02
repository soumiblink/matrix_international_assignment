import React from 'react';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Transform Your Business with AI</h1>
        <p>Custom AI solutions that automate workflows, boost productivity, and drive growth for your company.</p>
        <button className="cta-button" onClick={() => scrollToSection('contact')}>
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <div className="ai-illustration">🤖</div>
      </div>
    </section>
  );
}

export default Hero;
