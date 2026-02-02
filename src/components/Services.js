import React from 'react';

function Services() {
  const servicesData = [
    {
      icon: '💼',
      title: 'AI Consulting',
      description: 'Strategic AI implementation roadmap for your organization. We analyze your business needs and design custom AI strategies that drive real results.'
    },
    {
      icon: '🤖',
      title: 'Chatbot Development',
      description: 'Intelligent chatbots that enhance customer support 24/7. Our AI-powered bots understand context and provide accurate responses instantly.'
    },
    {
      icon: '⚙️',
      title: 'Process Automation',
      description: 'Streamline repetitive tasks with AI automation. Reduce manual work, minimize errors, and improve operational efficiency significantly.'
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights. Our AI analytics solutions help you make data-driven decisions and identify growth opportunities.'
    },
    {
      icon: '🧬',
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data. Predictive analytics, computer vision, NLP - we build intelligent systems tailored to your business.'
    },
    {
      icon: '🔐',
      title: 'AI Security & Ethics',
      description: 'Ensure your AI systems are secure and ethical. We implement best practices for data privacy, bias detection, and responsible AI deployment.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-header">
        <div className="header-line"></div>
        <h2>Our Services</h2>
        <p>Comprehensive AI solutions tailored to transform your business</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
