import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }

    // Simulate page load - in production, wait for actual assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Updated document theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      className={`${isDark ? 'dark' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`transition-colors duration-300 ${
        isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero isDark={isDark} />
        <Services isDark={isDark} />
        <CaseStudies isDark={isDark} />
        <WhyUs isDark={isDark} />
        <Testimonials isDark={isDark} />
        <ContactForm isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </motion.div>
  );
}

export default App;
