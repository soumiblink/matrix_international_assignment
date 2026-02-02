import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const storeMessageLocally = (name, email, message) => {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const timestamp = new Date().toLocaleString();
    
    messages.push({
      name,
      email,
      message,
      timestamp
    });
    
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    console.log('Message stored locally:', { name, email, message, timestamp });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMessage('Please fill in all fields');
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
          message
        }),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        storeMessageLocally(name, email, message);
        setFormMessage('✓ Message sent successfully! We\'ll get back to you soon.');
        setMessageType('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: store locally if Formspree fails
        storeMessageLocally(name, email, message);
        setFormMessage('✓ Message received! (stored locally)');
        setMessageType('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.log('Network error, storing locally:', error);
      // Fallback: store locally
      storeMessageLocally(name, email, message);
      setFormMessage('✓ Message received! (stored locally)');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? Get in touch with us today!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {messageType && (
            <div className={`form-message ${messageType}`}>
              {formMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
