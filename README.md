# MindFlow AI - React Landing Page

A modern, responsive React landing page for an AI consulting business featuring smooth animations, multiple sections, and a working contact form.

## 🚀 Features

- **Hero Section**: Eye-catching headline with CTA button
- **Services Section**: Showcase 4 AI services with icons
- **Why Choose Us**: Company story and achievement metrics
- **Working Contact Form**: Sends emails via Formspree + local storage backup
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Floating emojis and hover effects
- **Modern UI**: Beautiful gradient theme with professional styling

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\..\Matrix International-Assignment"
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

Start the development server:
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js       - Navigation bar with smooth scrolling
│   ├── Hero.js         - Hero section with CTA button
│   ├── Services.js     - Services grid (4 services)
│   ├── WhyUs.js        - About/Why Choose Us section
│   ├── Contact.js      - Contact form with validation
│   └── Footer.js       - Footer component
├── App.js              - Main app component
├── App.css             - Global styles
├── index.js            - React entry point
└── index.css           - Base styles
```

## 📧 Contact Form

The contact form includes:
- **Name, Email, Message** fields
- **Email validation**
- **Error handling** with user feedback
- **Dual submission system**:
  - Primary: Sends via Formspree email service
  - Fallback: Stores locally in browser storage

## 🎨 Customization

### Change Company Name
Edit [src/components/Navbar.js](src/components/Navbar.js) and [src/components/WhyUs.js](src/components/WhyUs.js)

### Change Colors
Edit [src/App.css](src/App.css) - look for gradient colors: `#667eea` and `#764ba2`

### Change Services
Edit the `servicesData` array in [src/components/Services.js](src/components/Services.js)

### Change Company Info
Edit text in [src/components/WhyUs.js](src/components/WhyUs.js)

## 📦 Building for Production

Create a production build:
```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🌐 Deployment

You can deploy this React app to:
- **Vercel** (recommended for React)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## 📝 Notes

- Messages are stored locally in browser's localStorage as backup
- To view stored messages in browser console, run: `viewStoredMessages()`
- The form uses Formspree.io for email functionality (free service)

## 📄 License

This project is open source and available for personal and commercial use.

