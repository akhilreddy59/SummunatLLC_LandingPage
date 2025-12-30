
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-orange-100 dark:text-orange-900/30 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            Words From Our Clients
          </h2>

          <div className="relative px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-10 leading-relaxed italic">
                  "{TESTIMONIALS[active].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[active].avatar} 
                    alt={`Client ${TESTIMONIALS[active].name} avatar`} 
                    className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-slate-800 bg-slate-200"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{TESTIMONIALS[active].name}</h4>
                    <p className="text-sm text-slate-500">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prev}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
