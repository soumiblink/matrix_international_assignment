import React, { useState } from 'react';

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesData = [
    {
      icon: '💼',
      title: 'AI Consulting',
      description: 'Strategic AI implementation roadmap for your organization. We analyze your business needs and design custom AI strategies that drive real results.',
      color: '#667eea'
    },
    {
      icon: '🤖',
      title: 'Chatbot Development',
      description: 'Intelligent chatbots that enhance customer support 24/7. Our AI-powered bots understand context and provide accurate responses instantly.',
      color: '#764ba2'
    },
    {
      icon: '⚙️',
      title: 'Process Automation',
      description: 'Streamline repetitive tasks with AI automation. Reduce manual work, minimize errors, and improve operational efficiency significantly.',
      color: '#f093fb'
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights. Our AI analytics solutions help you make data-driven decisions and identify growth opportunities.',
      color: '#667eea'
    },
    {
      icon: '🧬',
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data. Predictive analytics, computer vision, NLP - we build intelligent systems tailored to your business.',
      color: '#764ba2'
    },
    {
      icon: '🔐',
      title: 'AI Security & Ethics',
      description: 'Ensure your AI systems are secure and ethical. We implement best practices for data privacy, bias detection, and responsible AI deployment.',
      color: '#f093fb'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">What We Offer</span>
          <h2>Our Services</h2>
          <p>Comprehensive AI solutions tailored to transform your business operations and drive sustainable growth</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${hoveredIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <div className="card-footer">
                <button className="learn-more">
                  Learn More
                  <span className="arrow">→</span>
                </button>
              </div>

              <div className="card-glow" style={{ background: `radial-gradient(circle at top, ${service.color}22, transparent)` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;