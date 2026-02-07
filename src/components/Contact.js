import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@mindflowai.com',
      link: 'mailto:hello@mindflowai.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kolkata, WB',
      link: '#'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const storeMessageLocally = (name, email, company, message) => {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const timestamp = new Date().toLocaleString();
    
    messages.push({
      name,
      email,
      company,
      message,
      timestamp
    });
    
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    console.log('Message stored locally:', { name, email, company, message, timestamp });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, company, message } = formData;

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMessage('Please fill in all required fields');
      setMessageType('error');
      setTimeout(() => setMessageType(''), 5000);
      return;
    }

    if (!validateEmail(email)) {
      setFormMessage('Please enter a valid email address');
      setMessageType('error');
      setTimeout(() => setMessageType(''), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using Formspree service
      const response = await fetch('https://formspree.io/f/xbljqdlb', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          company,
          message
        }),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        storeMessageLocally(name, email, company, message);
        setFormMessage('✓ Message sent successfully! We\'ll get back to you within 24 hours.');
        setMessageType('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        storeMessageLocally(name, email, company, message);
        setFormMessage('✓ Message received! (stored locally)');
        setMessageType('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      }
    } catch (error) {
      console.log('Network error, storing locally:', error);
      storeMessageLocally(name, email, company, message);
      setFormMessage('✓ Message received! (stored locally)');
      setMessageType('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessageType(''), 8000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="gradient-orb-contact orb-1"></div>
        <div className="gradient-orb-contact orb-2"></div>
      </div>

      <div className="contact-container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? We'd love to hear about it. Get in touch and let's make something amazing together.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card-highlight">
              <h3>Ready to get started?</h3>
              <p>
                Fill out the form and our team will get back to you within 24 hours. 
                We're excited to learn about your project and explore how we can help.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact-method">
                  <div className="method-icon">{info.icon}</div>
                  <div className="method-details">
                    <div className="method-title">{info.title}</div>
                    <div className="method-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">⚡</div>
                <div className="trust-text">24-hour response time</div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🔒</div>
                <div className="trust-text">Your data is secure</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project and how we can help..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="arrow">→</span>
                </>
              )}
            </button>

            {messageType && (
              <div className={`form-message ${messageType}`}>
                {formMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;