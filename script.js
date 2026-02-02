// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        if (!name || !email || !message) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }

        // Disable button during submission
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Send email using Formspree service
            const response = await fetch('https://formspree.io/f/xbljqdlb', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Also store locally as backup
                storeMessageLocally(name, email, message);
                
                showMessage('✓ Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Scroll to form message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Fallback: store locally if Formspree fails
                storeMessageLocally(name, email, message);
                showMessage('✓ Message received! (stored locally)', 'success');
                contactForm.reset();
            }
        } catch (error) {
            console.log('Network error, storing locally:', error);
            // Fallback: store locally
            storeMessageLocally(name, email, message);
            showMessage('✓ Message received! (stored locally)', 'success');
            contactForm.reset();
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide error messages after 5 seconds
        if (type === 'error') {
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }
    }

    function storeMessageLocally(name, email, message) {
        // Store message in browser's localStorage
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        const timestamp = new Date().toLocaleString();
        
        messages.push({
            name: name,
            email: email,
            message: message,
            timestamp: timestamp
        });
        
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Log to console for verification
        console.log('Message stored locally:', {
            name: name,
            email: email,
            message: message,
            timestamp: timestamp
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Optional: Function to view stored messages (for testing)
function viewStoredMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    console.table(messages);
    return messages;
}
