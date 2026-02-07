import React from 'react';

function WhyUs() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Rapid deployment with minimal disruption to your operations'
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom AI strategies designed specifically for your business'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance with industry standards'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Average 40% efficiency improvement across client projects'
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Cutting-edge AI technology that keeps you ahead of competitors'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Dedicated team available around the clock for your success'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: '🚀' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Industries Served', icon: '🏢' }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="why-us-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="dots-pattern"></div>
      </div>

      <div className="why-us-container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2>Why MindFlow AI?</h2>
          <p className="intro-text">
            We combine cutting-edge technology with deep industry expertise to deliver AI solutions 
            that truly transform businesses. With a proven track record and commitment to excellence, 
            we're your partner in the AI revolution.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Join 150+ companies already leveraging AI for growth</p>
          </div>
          <button className="cta-button-secondary">
            Schedule a Consultation
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;