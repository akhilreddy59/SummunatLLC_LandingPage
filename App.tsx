
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // Defaulting to light mode as requested
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Synchronize darkMode state with document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          
          <main className="custom-scrollbar">
            <Hero />
            <Services />
            <CaseStudies />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
          </main>

          <Footer />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="fixed bottom-8 left-8 z-[100] w-12 h-12 rounded-full glass-morphism shadow-2xl flex items-center justify-center text-slate-600 dark:text-yellow-400 border border-slate-200 dark:border-slate-800 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Background Text Overlay Decor */}
          <div className="fixed top-[40%] right-[-5%] rotate-90 text-[12rem] font-black text-slate-100 dark:text-slate-900/10 pointer-events-none z-[-1] select-none uppercase transition-opacity duration-1000">
            Sammunat
          </div>
        </>
      )}
    </div>
  );
};

export default App;
