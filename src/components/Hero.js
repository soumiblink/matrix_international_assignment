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
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">✨</span>
            <span>AI-Powered Solutions</span>
          </div>
          
          <h1>
            Transform Your Business 
            <span className="gradient-text"> with AI</span>
          </h1>
          
          <p>
            Custom AI solutions that automate workflows, boost productivity, 
            and drive growth for your company. Experience the future of business today.
          </p>
          
          <div className="cta-group">
            <button className="cta-primary" onClick={() => scrollToSection('contact')}>
              Get Started
              <span className="arrow">→</span>
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('services')}>
              Learn More
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">📊</div>
            <div className="card-text">Analytics</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">⚡</div>
            <div className="card-text">Fast Processing</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🔒</div>
            <div className="card-text">Secure</div>
          </div>
          
          <div className="central-illustration">
            <div className="illustration-glow"></div>
            <div className="ai-brain">🧠</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;