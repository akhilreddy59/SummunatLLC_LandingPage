
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const words = ["Innovation", "Design", "Efficiency", "Growth"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex-1 flex flex-col items-center justify-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-widest uppercase border border-orange-100 dark:border-orange-800/50">
            Digitally Transforming Brands
          </span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
            Empowering Your Business <br /> Through 
            <span className="relative inline-block ml-4 text-orange-600 min-w-[200px] md:min-w-[320px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            SAMMUNAT is a premier digital solutions agency crafting high-performance 
            web apps, stunning designs, and AI-driven systems for global startups.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-full flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              View Case Studies
              <ArrowRight size={18} className="text-slate-400" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Optimized Floating Element Alignment */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="w-full max-w-5xl px-6 -mb-20 hidden md:block"
      >
        <div className="aspect-[21/9] glass-morphism rounded-t-[3rem] p-4 shadow-2xl border-b-0 overflow-hidden">
          <div className="w-full h-full bg-slate-900/50 rounded-t-[2rem] overflow-hidden flex items-center justify-center border border-white/10">
             <img 
               src="https://picsum.photos/seed/dashboard/1600/900.webp" 
               alt="SAMMUNAT Digital Dashboard Preview" 
               className="w-full h-full object-cover opacity-80"
               fetchPriority="high"
               loading="lazy"
               decoding="async"
               onLoad={(e) => (e.currentTarget as HTMLImageElement).classList.add('loaded')}
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
